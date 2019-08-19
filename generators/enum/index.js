const Generator = require('yeoman-generator');
const camelCase = require('camelcase');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enum name',
        validate: str => {
          if (str.trim().length > 0) {
            return true;
          }
          return 'Please add a name for your new enum';
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

    const fileName = camelCase(name);

    const enumName = camelCase(name, {
      pascalCase: true,
    });

    // copy page into the pages folder
    this.fs.copyTpl(this.templatePath('_enum.ts'), this.destinationPath(`enums/${fileName}.ts`), {
      enumName,
    });

    const enumsPath = './enums/index.ts';

    // update enums/index.d.ts to add the new namespace to the list
    this.fs.copy(enumsPath, enumsPath, {
      process(content) {
        const regEx = new RegExp(/\/\* new-enum-import-goes-here \*\//, 'g');
        const newContent = content
          .toString()
          .replace(regEx, `export { ${enumName} } from './${fileName}';\n/* new-enum-import-goes-here */`);
        return newContent;
      },
    });
  }
};
