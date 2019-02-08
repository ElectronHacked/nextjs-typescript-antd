var Generator = require ('yeoman-generator');
var mkdirp = require ('mkdirp');

module.exports = class extends Generator {
  prompting () {
    return this.prompt ([
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
        validate: str => {
          if (str.trim ().length > 0) {
            return true;
          }
          return 'Please add a name for your new page';
        },
      },
    ]).then (answers => {
      this.answers = {
        name: answers.name,
      };
    });
  }

  writing () {
    const {name, title} = this.answers;
    const nameWithLowerCase = name.charAt (0).toLowerCase () + name.slice (1);
    const className = nameWithLowerCase;
    const component = name.charAt (0).toUpperCase () + name.slice (1);
    // create folder project
    mkdirp (`components/${nameWithLowerCase}`);

    // copy component into the components folder
    this.fs.copyTpl (
      this.templatePath ('_component.js'),
      this.destinationPath (`components/${nameWithLowerCase}/index.tsx`),
      {
        component,
        className,
        i18n: nameWithLowerCase,
      }
    );

    // copy styles.scss
    this.fs.copyTpl (
      this.templatePath ('_styles.scss'),
      this.destinationPath (
        `components/${nameWithLowerCase}/${nameWithLowerCase}.scss`
      ),
      {
        className,
      }
    );

    // copy i18n.json
    this.fs.copyTpl (
      this.templatePath ('_i18n.json'),
      this.destinationPath (`static/locales/en/${nameWithLowerCase}.json`),
      {
        title,
      }
    );

    // copy unit test.js
    this.fs.copyTpl (
      this.templatePath ('_test.js'),
      this.destinationPath (
        `tests/units/components/${nameWithLowerCase}.test.js`
      ),
      {
        component,
        nameWithLowerCase,
      }
    );

    // update main.scss to add the new component stylesheet
    this.fs.copy ('./styles/main.scss', './styles/main.scss', {
      process: function (content) {
        var regEx = new RegExp (
          /\/\* new-component-stylesheet-goes-here \*\//,
          'g'
        );
        var newContent = content
          .toString ()
          .replace (
            regEx,
            `@import '~@root/components/${nameWithLowerCase}/${nameWithLowerCase}.scss';\n/* new-component-stylesheet-goes-here */`
          );
        return newContent;
      },
    });
  }
};
