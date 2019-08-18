const Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const humanizeString = require('humanize-string');
const camelCase = require('camelcase');
const decamelize = require('decamelize');

module.exports = class extends Generator {
  prompting() {
    const reducers = this.config.get('reducers');
    const _reducerOptions = reducers.sort();

    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Action name',
        validate: str => {
          if (str.trim().length > 0) {
            return true;
          }
          return 'Please add a name for your new action';
        },
      },
      {
        type: 'list',
        name: 'reducerName',
        message: 'Select the reducer',
        choices: _reducerOptions,
      },
      {
        type: 'confirm',
        name: 'isFulfillable',
        message: 'Is it fullfillable? (Does it have SUCCESS & ERROR?)',
        default: false,
      },
    ]).then(({ name, reducerName, isFulfillable }) => {
      this.answers = {
        name: camelCase(name),
        reducerName,
        isFulfillable,
      };
    });
  }

  writing() {
    const { name, reducerName, isFulfillable } = this.answers;

    const regionnify = (content, region) => `//#region ${region}\n${content}\n//#endregion\n`;

    const successToUpper = ACTION_NAME => `${ACTION_NAME}_SUCCESS`;
    const errorToUpper = ACTION_NAME => `${ACTION_NAME}_ERROR`;

    const successToCamelCase = ACTION_NAME => `${ACTION_NAME}_SUCCESS`;
    const errorToCamelCase = ACTION_NAME => `${ACTION_NAME}_ERROR`;

    const REDUX_STORE_BASE_PATH = `./redux-store/${reducerName.toLowerCase()}`;

    // #region Export from the `./actions` file

    const ACTION_NAME = decamelize(name, '_').toUpperCase();

    let ACTION_EXPORT_STATEMENT = `export const ${ACTION_NAME} = '${ACTION_NAME}';`;

    let CONSTANTS_IMPORT_STATEMENTS = `${ACTION_NAME},`;

    let CONSTANTS_CASE_STATEMENTS = `case ${ACTION_NAME}:`;

    if (isFulfillable) {
      ACTION_EXPORT_STATEMENT += `\nexport const ${successToUpper(ACTION_NAME)} = '${successToUpper(
        ACTION_NAME,
      )}';\nexport const ${errorToUpper(ACTION_NAME)} = '${errorToUpper(ACTION_NAME)}';`;

      CONSTANTS_IMPORT_STATEMENTS += `\n\t${successToUpper(ACTION_NAME)},\n\t${errorToUpper(ACTION_NAME)},`;

      CONSTANTS_CASE_STATEMENTS += `\n\t\tcase ${successToUpper(ACTION_NAME)}:\n\t\tcase ${errorToUpper(ACTION_NAME)}:`;
    }

    // Export the constants
    const ACTIONS_PATH = `${REDUX_STORE_BASE_PATH}/constants.ts`;

    // update constsntstss to export the newly-created actions
    this.fs.copy(ACTIONS_PATH, ACTIONS_PATH, {
      process(content) {
        const regEx = new RegExp(/\/\* new-constant-export-goes-here \*\//, 'g');
        const newContent = content
          .toString()
          .replace(
            regEx,
            `${regionnify(
              ACTION_EXPORT_STATEMENT,
              `${ACTION_NAME}-related constants`,
            )}\n\n/* new-constant-export-goes-here */`,
          );
        return newContent;
      },
    });
    // #endregion

    // #region Import actions in the reducer and put it in the case statements
    const REDUCER_PATH = `${REDUX_STORE_BASE_PATH}/reducer.ts`;

    // Import the constants
    this.fs.copy(REDUCER_PATH, REDUCER_PATH, {
      process(content) {
        const regEx = new RegExp(/\/\* new-constant-import-goes-here \*\//, 'g');
        const newContent = content
          .toString()
          .replace(regEx, `${CONSTANTS_IMPORT_STATEMENTS}\n\t/* new-constant-import-goes-here */`);
        return newContent;
      },
    });

    // Add constants in the case statemnts
    this.fs.copy(REDUCER_PATH, REDUCER_PATH, {
      process(content) {
        const regEx = new RegExp(/\/\* new-constant-cases-go-here \*\//, 'g');
        const newContent = content
          .toString()
          .replace(regEx, `${CONSTANTS_CASE_STATEMENTS}\n\t\t/* new-constant-cases-go-here */`);
        return newContent;
      },
    });
    // #endregion

    // const decamelizedName = decamelize(name, '-'); // page-name
    // const pascalCasedName = camelCase(name, {
    //   pascalCase: true,

    // }); // page-name
    // const className = `${decamelizedName}-page`; // page-name-class

    // const pagePath = isNestedPage ?
    //   `${parentPage}/${decamelizedName}` :
    //   `${decamelizedName}`;

    // const pagePageWithRoot = `pages/${pagePath}`;

    // // create folder project
    // mkdirp(pagePageWithRoot);

    // // copy page into the pages folder
    // this.fs.copyTpl(
    //   this.templatePath('_page.js'),
    //   this.destinationPath(`${pagePageWithRoot}/index.tsx`), {
    //     component: pascalCasedName,
    //     className,
    //     i18n: decamelizedName,
    //     title,
    //   }
    // );

    // // copy styles.scss
    // this.fs.copyTpl(
    //   this.templatePath('_styles.scss'),
    //   this.destinationPath(`${pagePageWithRoot}/styles.scss`), {
    //     className,
    //   }
    // );

    // // copy i18n.json
    // this.fs.copyTpl(
    //   this.templatePath('_i18n.json'),
    //   this.destinationPath(`static/locales/en/${pagePageWithRoot}.json`), {
    //     title,
    //   },
    // );
    // // copy unit test.js
    // this.fs.copyTpl(
    //   this.templatePath('_test.js'),
    //   this.destinationPath(`tests/units/${pagePageWithRoot}.test.js`), {
    //     component: pascalCasedName,
    //     decamelizedName,
    //   }
    // );

    // const linkItem = `
    //   <MenuItem
    //     key={uuid()}
    //     className={asPath === '/${decamelizedName}' ? activeClass : ''}
    //   >
    //     <Link href="/${decamelizedName}">
    //       <a>${title}</a>
    //     </Link>
    //   </MenuItem>
    // `;

    // const LAYOUT_PATH = './components/global/layout/index.tsx';

    // // update server.js to add the new namespace to the list
    // this.fs.copy(LAYOUT_PATH, LAYOUT_PATH, {
    //   process(content) {
    //     let regEx = new RegExp(/{\/\* new-menu-item \*\/}/, 'g');
    //     let newContent = content
    //       .toString()
    //       .replace(regEx, `${linkItem}\n\t\t\t\t\t{/* new-menu-item */}`);
    //     return newContent;
    //   },
    // });

    // // update server.js to add the new namespace to the list
    // const SERVER_PATH = './server.js';

    // this.fs.copy(SERVER_PATH, SERVER_PATH, {
    //   process(content) {
    //     let regEx = new RegExp(/\/\* new-i18n-namespace-here \*\//, 'g');
    //     let newContent = content
    //       .toString()
    //       .replace(
    //         regEx,
    //         `, '${decamelizedName}'/* new-i18n-namespace-here */`
    //       );
    //     return newContent;
    //   },
    // });

    // // Add reducer for this page
    // if (createReducer) {
    //   this.composeWith(
    //     'nextjs-typescript-antd:reducer', {
    //       options: {
    //         name,
    //         appName: this.appName,
    //       },
    //     }, {
    //       local: require.resolve('../reducer'),
    //     },
    //   );
    // }

    // // Save this page in the config file
    // // const _pages = this.config.get('pages').map(({ name }) => name);
    // const _pages = this.config.get('pages');

    // this.config.set('pages', [
    //   ..._pages,
    //   {
    //     name: decamelizedName,
    //     path: pagePath,
    //   },
    // ]);
  }
};
