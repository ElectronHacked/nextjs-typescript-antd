var Generator = require('yeoman-generator');
var mkdirp = require('mkdirp');
const humanizeString = require('humanize-string');
const camelCase = require('camelcase');
const decamelize = require('decamelize');

module.exports = class extends Generator {
  prompting() {
    const pages = this.config.get('pages');
    const _pageOptions = pages.map(({ path }) => path).sort();

    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Page name',
        validate: str => {
          if (str.trim().length > 0) {
            return true;
          }
          return 'Please add a name for your new page';
        },
      },
    ]).then(({ name }) => {
      return this.prompt([
        {
          type: 'input',
          name: 'title',
          message: 'Page title',
          default: humanizeString(name),
          validate: str => {
            if (str.trim().length > 0) {
              return true;
            }
            return 'Please add a name for your new page';
          },
        },
        {
          type: 'confirm',
          name: 'isNestedPage',
          message: 'Is this a nested page?',
          default: false,
        },
        {
          when: function(response) {
            return response.isNestedPage;
          },
          type: 'list',
          name: 'parentPage',
          message: 'Select the parent page',
          choices: _pageOptions,
        },
        {
          type: 'confirm',
          name: 'createReducer',
          message: 'Would you like to create reducer for this page?',
          default: false,
        },
      ]).then(({ title, isNestedPage, parentPage, createReducer }) => {
        this.answers = {
          name: camelCase(name, { pascalCase: true }), // Make sure that there's no space between the characters
          title,
          isNestedPage,
          parentPage:
            isNestedPage && parentPage
              ? pages.find(({ path }) => path === parentPage).name
              : '',
          createReducer,
        };
      });
    });
  }

  writing() {
    const {
      name,
      title,
      isNestedPage,
      parentPage,
      createReducer,
    } = this.answers;

    const decamelizedName = decamelize(name, '-'); // page-name
    const pascalCasedName = camelCase(name, { pascalCase: true }); // page-name
    const className = `${decamelizedName}-page`; // page-name-class

    const pagePath = isNestedPage
      ? `${parentPage}/${decamelizedName}`
      : `${decamelizedName}`;

    const pagePageWithRoot = `pages/${pagePath}`;

    // create folder project
    mkdirp(pagePageWithRoot);

    // copy page into the pages folder
    this.fs.copyTpl(
      this.templatePath('_page.js'),
      this.destinationPath(`${pagePageWithRoot}/index.tsx`),
      {
        component: pascalCasedName,
        className,
        i18n: decamelizedName,
        title,
      }
    );

    // copy styles.scss
    this.fs.copyTpl(
      this.templatePath('_styles.scss'),
      this.destinationPath(`${pagePageWithRoot}/styles.scss`),
      {
        className,
      }
    );

    // copy i18n.json
    this.fs.copyTpl(
      this.templatePath('_i18n.json'),
      this.destinationPath(`static/locales/en/${pagePageWithRoot}.json`),
      {
        title,
      }
    );
    // copy unit test.js
    this.fs.copyTpl(
      this.templatePath('_test.js'),
      this.destinationPath(`tests/units/${pagePageWithRoot}.test.js`),
      {
        component: pascalCasedName,
        decamelizedName,
      }
    );

    const linkItem = `
      <MenuItem
        key={uuid()}
        className={asPath === '/${decamelizedName}' ? activeClass : ''}
      >
        <Link href="/${decamelizedName}">
          <a>${title}</a>
        </Link>
      </MenuItem>
    `;

    const LAYOUT_PATH = './components/global/layout/index.tsx';

    // update server.js to add the new namespace to the list
    this.fs.copy(LAYOUT_PATH, LAYOUT_PATH, {
      process: function(content) {
        var regEx = new RegExp(/{\/\* new-menu-item \*\/}/, 'g');
        var newContent = content
          .toString()
          .replace(regEx, `${linkItem}\n\t\t\t\t\t{/* new-menu-item */}`);
        return newContent;
      },
    });

    // update server.js to add the new namespace to the list
    const SERVER_PATH = './server.js';

    this.fs.copy(SERVER_PATH, SERVER_PATH, {
      process: function(content) {
        var regEx = new RegExp(/\/\* new-i18n-namespace-here \*\//, 'g');
        var newContent = content
          .toString()
          .replace(
            regEx,
            `, '${decamelizedName}'/* new-i18n-namespace-here */`
          );
        return newContent;
      },
    });

    // Add reducer for this page
    if (createReducer) {
      this.composeWith(
        'nextjs-typescript-antd:reducer',
        {
          options: {
            name: name,
            appName: this.appName,
          },
        },
        {
          local: require.resolve('../reducer'),
        }
      );
    }

    // Save this page in the config file
    // const _pages = this.config.get('pages').map(({ name }) => name);
    const _pages = this.config.get('pages');

    this.config.set('pages', [
      ..._pages,
      {
        name: decamelizedName,
        path: pagePath,
      },
    ]);
  }
};
