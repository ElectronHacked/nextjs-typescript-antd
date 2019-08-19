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
    const actionNameToCamelCase = camelCase(name);
    const actionNameToPascalCase = camelCase(name, {
      pascalCase: true,
    });

    const regionnify = (content, region) => `//#region ${region}\n${content}\n//#endregion\n`;

    const successToUpper = ACTION_NAME => `${ACTION_NAME}_SUCCESS`;
    const errorToUpper = ACTION_NAME => `${ACTION_NAME}_ERROR`;

    const successToCamelCase = ACTION_NAME => `${ACTION_NAME}Success`;
    const errorToCamelCase = ACTION_NAME => `${ACTION_NAME}Error`;

    const REDUX_STORE_BASE_PATH = `./redux-store/${reducerName.toLowerCase()}`;

    // #region Export from the `./actions` file

    const CONSTANT_NAME = decamelize(name, '_').toUpperCase();

    let CONSTANT_EXPORT_STATEMENT = `export const ${CONSTANT_NAME} = '${CONSTANT_NAME}';`;

    let CONSTANTS_IMPORT_STATEMENTS = `${CONSTANT_NAME},`;

    const importConstantsHelper = path => {
      this.fs.copy(path, path, {
        process(content) {
          const regEx = new RegExp(/\/\* new-constant-import-goes-here \*\//, 'g');
          const newContent = content
            .toString()
            .replace(regEx, `${CONSTANTS_IMPORT_STATEMENTS}\n\t/* new-constant-import-goes-here */`);
          return newContent;
        },
      });
    };

    let CONSTANTS_CASE_STATEMENTS = `case ${CONSTANT_NAME}:`;

    if (isFulfillable) {
      CONSTANT_EXPORT_STATEMENT += `\nexport const ${successToUpper(CONSTANT_NAME)} = '${successToUpper(
        CONSTANT_NAME,
      )}';\nexport const ${errorToUpper(CONSTANT_NAME)} = '${errorToUpper(CONSTANT_NAME)}';`;

      CONSTANTS_IMPORT_STATEMENTS += `\n\t${successToUpper(CONSTANT_NAME)},\n\t${errorToUpper(CONSTANT_NAME)},`;

      CONSTANTS_CASE_STATEMENTS += `\n\t\tcase ${successToUpper(CONSTANT_NAME)}:\n\t\tcase ${errorToUpper(
        CONSTANT_NAME,
      )}:`;
    }

    // Export the constants
    const CONSTANTS_PATH = `${REDUX_STORE_BASE_PATH}/constants.ts`;

    // update constsntstss to export the newly-created actions
    this.fs.copy(CONSTANTS_PATH, CONSTANTS_PATH, {
      process(content) {
        const regEx = new RegExp(/\/\* new-constant-export-goes-here \*\//, 'g');
        const newContent = content
          .toString()
          .replace(
            regEx,
            `${regionnify(
              CONSTANT_EXPORT_STATEMENT,
              `${CONSTANT_NAME}-related constants`,
            )}\n\n/* new-constant-export-goes-here */`,
          );
        return newContent;
      },
    });
    // #endregion

    // #region Import actions in the reducer and put it in the case statements
    const REDUCER_PATH = `${REDUX_STORE_BASE_PATH}/reducer.ts`;

    // Import the constants
    importConstantsHelper(REDUCER_PATH);

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

    // #region Actions file
    // Import the constants
    const ACTIONS_PATH = `${REDUX_STORE_BASE_PATH}/actions.ts`;

    // Import the constants
    importConstantsHelper(ACTIONS_PATH);

    let ACTIONS = '';
    const booleanable = `is${actionNameToPascalCase}InProgress`;
    const errable = `${actionNameToCamelCase}ErrorMsg`;
    const successible = `${actionNameToCamelCase}SuccessMsg`;

    if (isFulfillable) {
      ACTIONS = `
      export const ${actionNameToCamelCase} = createAction<I${reducerName}State>(${CONSTANT_NAME}, () => ({
        booleanable: { ${booleanable}: true },
        errable: { ${errable}: null },
        successible: { ${successible}: null },
      }));
      
      export const ${successToCamelCase(
        actionNameToCamelCase,
      )} = createAction<I${reducerName}State, I${reducerName}State>(${successToUpper(CONSTANT_NAME)}, state => ({
        booleanable: { ${booleanable}: false },
        successible: { ${successible}: '${CONSTANT_NAME} action fullfilled!' },
        state,
      }));
      
      export const ${errorToCamelCase(
        actionNameToCamelCase,
      )} = createAction<I${reducerName}State, string>(${errorToUpper(CONSTANT_NAME)}, ${errable} => ({
        booleanable: { ${booleanable}: false },
        errable: { ${errable} },
      }));`;
    } else {
      ACTIONS = `export const ${actionNameToCamelCase} = createAction<I${reducerName}State, I${reducerName}State>(${CONSTANT_NAME}, state => ({ state })); // Make sure you pass a proper payload!!!`;
    }

    // update constsntstss to export the newly-created actions
    this.fs.copy(ACTIONS_PATH, ACTIONS_PATH, {
      process(content) {
        const regEx = new RegExp(/\/\* new-actions-go-here \*\//, 'g');
        const newContent = content
          .toString()
          .replace(
            regEx,
            `${regionnify(ACTIONS, `${actionNameToCamelCase}-related constants`)}\n\n/* new-actions-go-here */`,
          );
        return newContent;
      },
    });
    // #endregion

    // #region Do the things in the state.ts
    if (isFulfillable) {
      const STATE_PATH = `${REDUX_STORE_BASE_PATH}/state.ts`;

      // Booleanable
      this.fs.copy(STATE_PATH, STATE_PATH, {
        process(content) {
          const regEx = new RegExp(/\/\* new-booleanable-goes-here \*\//, 'g');
          const newContent = content.toString().replace(regEx, `| '${booleanable}' /* new-booleanable-goes-here */`);
          return newContent;
        },
      });

      // Errable
      this.fs.copy(STATE_PATH, STATE_PATH, {
        process(content) {
          const regEx = new RegExp(/\/\* new-errable-goes-here \*\//, 'g');
          const newContent = content.toString().replace(regEx, `| '${errable}' /* new-errable-goes-here */`);
          return newContent;
        },
      });

      // Successible
      this.fs.copy(STATE_PATH, STATE_PATH, {
        process(content) {
          const regEx = new RegExp(/\/\* new-successible-goes-here \*\//, 'g');
          const newContent = content.toString().replace(regEx, `| '${successible}' /* new-successible-goes-here */`);
          return newContent;
        },
      });
    }
    // #endregion

    // #region Sagas
    if (isFulfillable) {
      const SAGAS_PATH = `${REDUX_STORE_BASE_PATH}/sagas.ts`;

      // Import the constant
      this.fs.copy(SAGAS_PATH, SAGAS_PATH, {
        process(content) {
          const regEx = new RegExp(/\/\* new-constant-import-goes-here \*\//, 'g');
          const newContent = content
            .toString()
            .replace(regEx, `${CONSTANT_NAME},\n\t/* new-constant-import-goes-here */`);
          return newContent;
        },
      });

      // Import the actions
      const ACTIONS_IMPORT_STATEMENTS = `${successToCamelCase(actionNameToCamelCase)},\n\t${errorToCamelCase(
        actionNameToCamelCase,
      )},`;

      this.fs.copy(SAGAS_PATH, SAGAS_PATH, {
        process(content) {
          const regEx = new RegExp(/\/\* new-action-import-goes-here \*\//, 'g');
          const newContent = content
            .toString()
            .replace(regEx, `${ACTIONS_IMPORT_STATEMENTS}\n\t/* new-action-import-goes-here */`);
          return newContent;
        },
      });

      // Create a saga
      const ERROR_MSG = '"Sorry, An error occured! Please try again later!"';
      const SAGA_NAME = `${actionNameToCamelCase}Saga`;

      const SAGA = `
    function* ${SAGA_NAME}() {
      const BOOL_VALUE = Math.random() >= 0.5;

      yield delay(500); // Just sleep for half a sec just to look real. A saga requires a yield because it's a generator

      try {    
        if (BOOL_VALUE) {
          yield put(${successToCamelCase(actionNameToCamelCase)}({}));
        } else {
          yield put(${errorToCamelCase(actionNameToCamelCase)}(${ERROR_MSG}));
        }
      } catch (error) {
        yield put(${errorToCamelCase(actionNameToCamelCase)}(${ERROR_MSG}));
      }
    }
    `;

      // Add a saga
      this.fs.copy(SAGAS_PATH, SAGAS_PATH, {
        process(content) {
          const regEx = new RegExp(/\/\* new-saga-goes-here \*\//, 'g');
          const newContent = content.toString().replace(regEx, `${SAGA}\n\n/* new-saga-goes-here */`);
          return newContent;
        },
      });

      // Register the saga
      const SAGA_REGISTRATION = `takeLatest(${CONSTANT_NAME}, ${SAGA_NAME}),`;

      this.fs.copy(SAGAS_PATH, SAGAS_PATH, {
        process(content) {
          const regEx = new RegExp(/\/\* new-saga-registration-goes-here \*\//, 'g');
          const newContent = content
            .toString()
            .replace(regEx, `${SAGA_REGISTRATION}\n\t\t/* new-saga-registration-goes-here */`);
          return newContent;
        },
      });
      // #endregion
    }
    // #endregion
  }
};
