const Generator = require('yeoman-generator');
const camelCase = require('camelcase');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'HOC name',
        validate: str => {
          if (str.trim().length > 0) {
            return true;
          }
          return 'Please add a name for your new Higher-order component';
        },
      },
    ]).then(({ name }) => {
      this.answers = {
        name: camelCase(name, {
          pascalCase: true,
        }),
      };
    });
  }

  writing() {
    const { name } = this.answers;

    const hocName = camelCase(name);

    // copy page into the pages folder
    this.fs.copyTpl(this.templatePath('_hoc.ts'), this.destinationPath(`hocs/${hocName}.tsx`), {
      hocName,
    });

    const hocsPath = './hocs/index.ts';

    // update hocs/index.d.ts to add the new namespace to the list
    this.fs.copy(hocsPath, hocsPath, {
      process(content) {
        const regEx = new RegExp(/\/\* new-hoc-import-goes-here \*\//, 'g');
        const newContent = content
          .toString()
          .replace(regEx, `export { default as ${hocName} } from './${hocName}';\n/* new-hoc-import-goes-here */`);
        return newContent;
      },
    });
  }
};
