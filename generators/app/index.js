var Generator = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = class extends Generator {
  // note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing...');

    // This makes `appname` a required argument.
    this.argument('appname', { type: String, required: false });
  }

  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.options.appname || 'nextjs-ts-ant-app',
      },
      {
        type: 'input',
        name: 'displayName',
        message: 'Your project display name',
        store: true,
      },
      {
        type: 'input',
        name: 'fullname',
        message: "What's your full name",
        store: true,
      },
      {
        type: 'input',
        name: 'email',
        message: "What's your email address",
        store: true,
      },
    ]).then(answers => {
      this.answers = {
        name: answers.name,
        displayName: answers.displayName,
        fullName: answers.fullname,
        email: answers.email,
      };
    });
  }

  writing() {
    const { name, displayName, fullName, email } = this.answers;

    // create folder project
    mkdirp(name);

    // change project root to the new folder
    this.destinationRoot(this.destinationPath(name));

    // copy package.json and update some values
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        name,
        fullName,
        email,
      }
    );

    // copy all files starting with .{whaetever} (like .eslintrc)
    this.fs.copy(this.templatePath('src/.*'), this.destinationPath('./'));

    // copy all folders and their contents
    this.fs.copy(this.templatePath('src'), this.destinationPath('./'));

    // Update the footer to have the name of the Application, the year and the user who created it
    this.fs.copyTpl(
      this.templatePath('_layout.tsx'),
      this.destinationPath(`./components/global/layout/index.tsx`),
      {
        displayName,
        fullName,
      }
    );

    // save config file!
    this.config.save();
  }
  install() {
    // install all dependencies
    this.npmInstall().then(
      () => {
        this.log('Dependencies Installed.');
      },
      () =>
        this.log(
          'We could not finish to install the node dependencies, please try again manually'
        )
    );
  }
  end() {
    this.log(`Open your new project: cd ${this.answers.name}`);
    this.log('To run in dev mode use: yarn dev');
  }
};
