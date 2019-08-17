var Generator = require('yeoman-generator');

const humanizeString = require('humanize-string');
const camelCase = require('camelcase');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Context name',
        validate: str => {
          if (str.trim().length > 0) {
            return true;
          }
          return 'Please add a name for your new context';
        },
      },
    ]).then(answers => {
      this.answers = {
        name: camelCase(answers.name, {
          pascalCase: true,
        }),
      };
    });
  }

  writing() {
    const { name } = this.answers;

    const fileName = camelCase(name);

    const contextName = camelCase(name, {
      pascalCase: true,
    });

    // copy page into the pages folder
    this.fs.copyTpl(this.templatePath('_context.ts'), this.destinationPath(`contexts/${fileName}.ts`), {
      contextName,
    });

    const contextsPath = './contexts/index.ts';

    // update contexts/index.d.ts to add the new namespace to the list
    this.fs.copy(contextsPath, contextsPath, {
      process: function(content) {
        var regEx = new RegExp(/\/\* new-context-import-goes-here \*\//, 'g');
        var newContent = content
          .toString()
          .replace(regEx, `export { ${contextName} } from './${contextName}';\n/* new-context-import-goes-here */`);
        return newContent;
      },
    });
  }
};
