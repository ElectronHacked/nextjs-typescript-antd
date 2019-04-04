var Generator = require ('yeoman-generator');
var mkdirp = require ('mkdirp');

module.exports = class extends Generator {
  prompting () {
    return this.prompt ([
      {
        type: 'input',
        name: 'name',
        message: 'Reducer name',
        validate: str => {
          if (str.trim ().length > 0) {
            return true;
          }
          return 'Please add a name for your new reducer';
        },
      },
    ]).then (answers => {
      this.answers = {
        name: answers.name,
      };
    });
  }

  writing () {
    const {name} = this.answers;

    const nameWithLowerCase = name.charAt (0).toLowerCase () + name.slice (1);

    const nameToUpper = name.charAt (0).toUpperCase () + name.slice (1);

    const stateName = `I${nameToUpper}State`;

    const selectorState = `${nameWithLowerCase}State`;

    const sagaName = `${nameWithLowerCase}Saga`;

    const reduxStorePath = this.fs.exists ('redux') ? 'redux' : 'redux-store';

    // create folder project
    mkdirp (`${reduxStorePath}/${nameWithLowerCase}`);

    // copy actions into the redux folder
    this.fs.copyTpl (
      this.templatePath ('_actions.ts'),
      this.destinationPath (
        `${reduxStorePath}/${nameWithLowerCase}/actions.ts`
      ),
      {}
    );

    // copy constants
    this.fs.copyTpl (
      this.templatePath ('_constants.ts'),
      this.destinationPath (
        `${reduxStorePath}/${nameWithLowerCase}/constants.ts`
      ),
      {}
    );

    // copy payloads
    this.fs.copyTpl (
      this.templatePath ('_payloads.ts'),
      this.destinationPath (
        `${reduxStorePath}/${nameWithLowerCase}/payloads.ts`
      ),
      {}
    );

    // copy reducer
    this.fs.copyTpl (
      this.templatePath ('_reducer.ts'),
      this.destinationPath (
        `${reduxStorePath}/${nameWithLowerCase}/reducer.ts`
      ),
      {
        stateName,
      }
    );

    // copy saga
    this.fs.copyTpl (
      this.templatePath ('_sagas.ts'),
      this.destinationPath (`${reduxStorePath}/${nameWithLowerCase}/sagas.ts`),
      {
        sagaName,
      }
    );

    // copy selector
    this.fs.copyTpl (
      this.templatePath ('_selectors.ts'),
      this.destinationPath (
        `${reduxStorePath}/${nameWithLowerCase}/selectors.ts`
      ),
      {
        stateName: selectorState,
        nameWithLowerCase,
      }
    );

    // copy state
    this.fs.copyTpl (
      this.templatePath ('_state.ts'),
      this.destinationPath (`${reduxStorePath}/${nameWithLowerCase}/state.ts`),
      {
        stateName,
      }
    );

    // update rootReducer.ts to add the new namespace to the list
    const rootReducerPath = `./${reduxStorePath}/rootReducer.ts`;

    this.fs.copy (rootReducerPath, rootReducerPath, {
      process: function (content) {
        var regEx = new RegExp (
          /\/\* new-imported-reducer-goes-here \*\//,
          'g'
        );
        var newContent = content
          .toString ()
          .replace (
            regEx,
            `import ${nameWithLowerCase} from './${nameWithLowerCase}/reducer';\n/* new-imported-reducer-goes-here */`
          );
        return newContent;
      },
    });

    // update rootReducer.ts to add the new reducer to the rootReducer object
    this.fs.copy (rootReducerPath, rootReducerPath, {
      process: function (content) {
        var regEx = new RegExp (
          /\/\* new-tranformed-reducer-export-goes-here \*\//,
          'g'
        );
        var newContent = content
          .toString ()
          .replace (
            regEx,
            `${nameWithLowerCase},\n/* new-tranformed-reducer-export-goes-here */`
          );
        return newContent;
      },
    });

    // update rootSaga.ts to add the new namespace to the list
    const rootSagaPath = `./${reduxStorePath}/rootSaga.ts`;

    this.fs.copy (rootSagaPath, rootSagaPath, {
      process: function (content) {
        var regEx = new RegExp (/\/\* new-imported-saga-goes-here \*\//, 'g');
        var newContent = content
          .toString ()
          .replace (
            regEx,
            `import ${nameWithLowerCase} from './${nameWithLowerCase}/sagas';\n/* new-imported-saga-goes-here */`
          );
        return newContent;
      },
    });

    // update rootSaga.ts to add the new reducer to the rootSaga object
    this.fs.copy (rootSagaPath, rootSagaPath, {
      process: function (content) {
        var regEx = new RegExp (
          /\/\* new-imported-saga-element-goes-here \*\//,
          'g'
        );
        var newContent = content
          .toString ()
          .replace (
            regEx,
            `${nameWithLowerCase},\n/* new-imported-saga-element-goes-here */`
          );
        return newContent;
      },
    });

    // update storeState.ts to add the new namespace to the list
    const rootStatePath = `./${reduxStorePath}/storeState.ts`;

    this.fs.copy (rootStatePath, rootStatePath, {
      process: function (content) {
        var regEx = new RegExp (/\/\* new-imported-state-goes-here \*\//, 'g');
        var newContent = content
          .toString ()
          .replace (
            regEx,
            `import { ${stateName} } from './${nameWithLowerCase}/state';\n/* new-imported-state-goes-here */`
          );
        return newContent;
      },
    });

    // update storeState.ts to add the new reducer to the storeState object
    this.fs.copy (rootStatePath, rootStatePath, {
      process: function (content) {
        var regEx = new RegExp (
          /\/\* new-imported-state-key-goes-here \*\//,
          'g'
        );
        var newContent = content
          .toString ()
          .replace (
            regEx,
            `readonly ${nameWithLowerCase}: ${stateName};\n\t/* new-imported-state-key-goes-here */`
          );
        return newContent;
      },
    });
  }
};
