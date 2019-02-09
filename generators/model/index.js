var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Model name',
        validate: str => {
          if (str.trim().length > 0) {
            return true;
          }
          return 'Please add a name for your new model';
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
    const nameWithUpperCase = name.charAt(0).toUpperCase() + name.slice(1);

    const interfaceName = `I${nameWithUpperCase}`;

    // copy page into the pages folder
    this.fs.copyTpl(
      this.templatePath('_model.ts'),
      this.destinationPath(`models/${nameWithLowerCase}.d.ts`),
      {
        interfaceName,
      }
    );

    // update models/index.d.ts to add the new namespace to the list
    this.fs.copy('./models/index.d.ts', './models/index.d.ts', {
      process: function(content) {
        var regEx = new RegExp(/\/\* new-interface-import-goes-here \*\//, 'g');
        var newContent = content
          .toString()
          .replace(
            regEx,
            `import { ${interfaceName} } from './${nameWithLowerCase}';\n/* new-interface-import-goes-here */`
          );
        return newContent;
      },
    });

    // update models/index.d.ts to add the new interface to a list of exports
    this.fs.copy('./models/index.d.ts', './models/index.d.ts', {
      process: function(content) {
        var regEx = new RegExp(
          /\/\* new-imported-interface-export-goes-here \*\//,
          'g'
        );
        var newContent = content
          .toString()
          .replace(
            regEx,
            `${interfaceName},\n\t/* new-imported-interface-export-goes-here */`
          );
        return newContent;
      },
    });
  }
};
