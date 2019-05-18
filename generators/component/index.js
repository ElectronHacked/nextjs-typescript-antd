var Generator = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
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
      },
      {
        when: function(response) {
          return response.pageSpecificComponent;
        },
        name: 'pageName',
        message: 'Page name',
      },
    ]).then(answers => {
      this.answers = {
        name: answers.name,
        pageSpecificComponent: answers.pageSpecificComponent,
        pageName: answers.pageName,
      };
    });
  }

  writing() {
    const { name, title, pageSpecificComponent, pageName } = this.answers;

    const nameWithLowerCase = name.charAt(0).toLowerCase() + name.slice(1);

    const className = nameWithLowerCase;
    const component = name.charAt(0).toUpperCase() + name.slice(1);

    let path = `components/global`;

    if (pageSpecificComponent && !!pageName) {
      path = `components/pages/${pageName.toLowerCase()}`;
    }

    const componentNamespace = `${path}/${nameWithLowerCase}`.replace(
      'components',
      '.'
    );

    // create folder project
    mkdirp(path);

    // copy component into the components folder
    this.fs.copyTpl(
      this.templatePath('_component.js'),
      this.destinationPath(`${path}/${nameWithLowerCase}/index.tsx`),
      {
        component,
        className,
        i18n: nameWithLowerCase,
      }
    );

    // copy styles.scss
    this.fs.copyTpl(
      this.templatePath('_styles.scss'),
      this.destinationPath(`${path}/${nameWithLowerCase}/styles.scss`),
      {
        className,
      }
    );

    // copy i18n.json
    this.fs.copyTpl(
      this.templatePath('_i18n.json'),
      this.destinationPath(`static/locales/en/${nameWithLowerCase}.json`),
      {
        title,
      }
    );

    // copy unit test.js
    this.fs.copyTpl(
      this.templatePath('_test.js'),
      this.destinationPath(
        `tests/units/components/${nameWithLowerCase}.test.js`
      ),
      {
        component,
        nameWithLowerCase,
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
