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
        message: 'Component name',
        validate: str => {
          if (str.trim().length > 0) {
            return true;
          }
          return 'Please add a name for your new page';
        },
      },
      {
        name: 'pageSpecificComponent',
        type: 'confirm',
        message: 'Is this a page-specific component?',
        default: false,
      },
      {
        when: function({ pageSpecificComponent }) {
          return pageSpecificComponent;
        },
        type: 'list',
        name: 'pageName',
        message: 'Page name',
        choices: _pageOptions,
      },
    ]).then(({ name, pageSpecificComponent, pageName }) => {
      this.answers = {
        name: camelCase(name, { pascalCase: true }),
        pageSpecificComponent,
        pageName,
      };
    });
  }

  writing() {
    const { name, title, pageSpecificComponent, pageName } = this.answers;

    const camelCasedName = camelCase(name);

    const decamelizedName = decamelize(name, '-');
    const className = decamelizedName;
    const component = camelCase(name, { pascalCase: true });

    let path = `components/global`;

    if (pageSpecificComponent && !!pageName) {
      path = `components/pages/${pageName}`;
    }

    const componentNamespace = `${path}/${camelCasedName}`.replace(
      'components',
      '.'
    );

    // create folder project
    mkdirp(path);

    // copy component into the components folder
    this.fs.copyTpl(
      this.templatePath('_component.js'),
      this.destinationPath(`${path}/${camelCasedName}/index.tsx`),
      {
        component,
        className,
        i18n: camelCasedName,
      }
    );

    // copy styles.scss
    this.fs.copyTpl(
      this.templatePath('_styles.scss'),
      this.destinationPath(`${path}/${camelCasedName}/styles.scss`),
      {
        className,
      }
    );

    // copy i18n.json
    this.fs.copyTpl(
      this.templatePath('_i18n.json'),
      this.destinationPath(`static/locales/en/${camelCasedName}.json`),
      {
        title,
      }
    );

    // copy unit test.js
    this.fs.copyTpl(
      this.templatePath('_test.js'),
      this.destinationPath(`tests/units/components/${camelCasedName}.test.js`),
      {
        component,
        camelCasedName,
      }
    );

    // update ccomponents/index.ts to add the new namespace to the list
    const indexPath = './components/index.ts';

    this.fs.copy(indexPath, indexPath, {
      process: function(content) {
        var regEx = new RegExp(/\/\* new-component-import-goes-here \*\//, 'g');
        var newContent = content
          .toString()
          .replace(
            regEx,
            `export { default as ${component} } from '${componentNamespace}';\n/* new-component-import-goes-here */`
          );
        return newContent;
      },
    });
  }
};
