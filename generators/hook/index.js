const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Hook name (Should start with use)',
        validate: str => {
          if (str.trim().length > 0) {
            return true;
          }
          return 'Please add a name for your new hook';
        },
      },
    ]).then(answers => {
      this.answers = {
        name: answers.name,
      };
    });
  }

  writing() {
    const { name: hookName } = this.answers;

    // copy page into the pages folder
    this.fs.copyTpl(this.templatePath('_hook.ts'), this.destinationPath(`hooks/${hookName}.ts`), {
      hookName,
    });

    const hooksPath = './hooks/index.ts';

    // update models/index.d.ts to add the new namespace to the list
    this.fs.copy(hooksPath, hooksPath, {
      process(content) {
        const regEx = new RegExp(/\/\* new-hook-import-goes-here \*\//, 'g');
        const newContent = content
          .toString()
          .replace(regEx, `export { ${hookName} } from './${hookName}';\n/* new-hook-import-goes-here */`);
        return newContent;
      },
    });
  }
};
