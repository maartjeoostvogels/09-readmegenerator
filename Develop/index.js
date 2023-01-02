// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  {
    type: 'input',
    message: 'Provide a title for your project.',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Provide a short description explaining the what, why, and how of your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Provide instructions and examples for use.',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'List details of any followed tutorials, collaborator names with GitHub profiles and creators that helped you.',
    name: 'credits',
  },
  {
    type: 'list',
    message: 'What license would you like to add to your README file?',
    name: 'license',
    choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC', 'None'],
  },
  {
    type: 'input',
    message: 'If you would like other developers to contribute to your application or package, please include guidelines for how to do so.',
    name: 'contribute',
  },
  {
    type: 'input',
    message: 'Write tests for your application and provide examples on how to run them here.',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your e-mail address?',
    name: 'email',
  },
];

function writeToFile(fileName, data) {
  const contents = generateMarkdown(data);
  
  fs.writeFile(fileName, contents, (err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The file has the following content:");
      console.log(fs.readFileSync(fileName, "utf8"));
    }
  });
}

function init() {
  inquirer.prompt(questions).then((contents) => {
    writeToFile("README.md", contents);
  });
}

// Function call to initialize app
init();
