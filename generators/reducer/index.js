var Generator = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Reducer name',
        validate: str => {
          if (str.trim().length > 0) {
            return true;
          }
          return 'Please add a name for your new reducer';
        },
      },
    ]).then(answers => {
      this.answers = {
        name: answers.name,
      };
    });
  }

  writing() {
    const { name } = this.answers;

    const nameWithLowerCase = name.charAt(0).toLowerCase() + name.slice(1);

    const nameToUpper = name.charAt(0).toUpperCase() + name.slice(1);

    const stateName = `I${nameToUpper}State`;

    const selectorState = `${nameWithLowerCase}State`;

    const sagaName = `${nameWithLowerCase}Saga`;

    // create folder project
    mkdirp(`redux/${nameWithLowerCase}`);

    // copy actions into the redux folder
    this.fs.copyTpl(
      this.templatePath('_actions.ts'),
      this.destinationPath(`redux/${nameWithLowerCase}/actions.ts`),
      {}
    );

    // copy constants
    this.fs.copyTpl(
      this.templatePath('_constants.ts'),
      this.destinationPath(`redux/${nameWithLowerCase}/constants.ts`),
      {}
    );

    // copy payloads
    this.fs.copyTpl(
      this.templatePath('_payloads.ts'),
      this.destinationPath(`redux/${nameWithLowerCase}/payloads.ts`),
      {}
    );

    // copy reducer
    this.fs.copyTpl(
      this.templatePath('_reducer.ts'),
      this.destinationPath(`redux/${nameWithLowerCase}/reducer.ts`),
      {
        stateName,
      }
    );

    // copy saga
    this.fs.copyTpl(
      this.templatePath('_sagas.ts'),
      this.destinationPath(`redux/${nameWithLowerCase}/sagas.ts`),
      {
        sagaName,
      }
    );

    // copy selector
    this.fs.copyTpl(
      this.templatePath('_selectors.ts'),
      this.destinationPath(`redux/${nameWithLowerCase}/selectors.ts`),
      {
        stateName: selectorState,
        nameWithLowerCase,
      }
    );

    // copy state
    this.fs.copyTpl(
      this.templatePath('_state.ts'),
      this.destinationPath(`redux/${nameWithLowerCase}/state.ts`),
      {
        stateName,
      }
    );

    // update rootReducer.ts to add the new namespace to the list
    this.fs.copy('./redux/rootReducer.ts', './redux/rootReducer.ts', {
      process: function(content) {
        var regEx = new RegExp(/\/\* new-imported-reducer-goes-here \*\//, 'g');
        var newContent = content
          .toString()
          .replace(
            regEx,
            `import ${nameWithLowerCase} from './${nameWithLowerCase}/reducer';\n/* new-imported-reducer-goes-here */`
          );
        return newContent;
      },
    });

    // update rootReducer.ts to add the new reducer to the rootReducer object
    this.fs.copy('./redux/rootReducer.ts', './redux/rootReducer.ts', {
      process: function(content) {
        var regEx = new RegExp(
          /\/\* new-tranformed-reducer-export-goes-here \*\//,
          'g'
        );
        var newContent = content
          .toString()
          .replace(
            regEx,
            `${nameWithLowerCase},\n/* new-tranformed-reducer-export-goes-here */`
          );
        return newContent;
      },
    });

    // update rootSaga.ts to add the new namespace to the list
    this.fs.copy('./redux/rootSaga.ts', './redux/rootSaga.ts', {
      process: function(content) {
        var regEx = new RegExp(/\/\* new-imported-saga-goes-here \*\//, 'g');
        var newContent = content
          .toString()
          .replace(
            regEx,
            `import ${nameWithLowerCase} from './${nameWithLowerCase}/sagas';\n/* new-imported-saga-goes-here */`
          );
        return newContent;
      },
    });

    // update rootSaga.ts to add the new reducer to the rootSaga object
    this.fs.copy('./redux/rootSaga.ts', './redux/rootSaga.ts', {
      process: function(content) {
        var regEx = new RegExp(
          /\/\* new-imported-saga-element-goes-here \*\//,
          'g'
        );
        var newContent = content
          .toString()
          .replace(
            regEx,
            `${nameWithLowerCase},\n/* new-imported-saga-element-goes-here */`
          );
        return newContent;
      },
    });

    // update storeState.ts to add the new namespace to the list
    this.fs.copy('./redux/storeState.ts', './redux/storeState.ts', {
      process: function(content) {
        var regEx = new RegExp(/\/\* new-imported-state-goes-here \*\//, 'g');
        var newContent = content
          .toString()
          .replace(
            regEx,
            `import { ${stateName} } from './${nameWithLowerCase}/state';\n\t/* new-imported-state-goes-here */`
          );
        return newContent;
      },
    });

    // update storeState.ts to add the new reducer to the storeState object
    this.fs.copy('./redux/storeState.ts', './redux/storeState.ts', {
      process: function(content) {
        var regEx = new RegExp(
          /\/\* new-imported-state-key-goes-here \*\//,
          'g'
        );
        var newContent = content
          .toString()
          .replace(
            regEx,
            `readonly ${nameWithLowerCase}: ${stateName};\n\t/* new-imported-state-key-goes-here */`
          );
        return newContent;
      },
    });
  }
};
