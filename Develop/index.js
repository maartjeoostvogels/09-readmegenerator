// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
/*
const questions = [
    {
    type: 'input',
    message: 'Provide a title for your project.',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Provide a short description explaining the what, why, and how of your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'hat problem does it solve?',
    name: 'table of contents',
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
    message: 'List details of any creators, followed tutorials and collaborator names with GitHub profiles here.',
    name: 'credits',
  },
  {
    type: 'list',
    message: 'What license would you like to add to your README file?',
    name: 'license',
    choices: ['Apache License 2.0','GNU GPLv3', 'MIT', 'ISC'],
  },
  {
    type: 'input',
    message: 'If you would like other developers to contribute to your application or package, please include guidelines for how to do so.',
    name: 'contributing',
  },
  {
    type: 'input',
    message: 'Write tests for your application and provide examples on how to run them here.',
    name: 'tests',
  },
];
*/

const questions = [
  {
    type: 'list',
    message: 'What license would you like to add to your README file?',
    name: 'license',
    choices: ['Apache License 2.0','GNU GPLv3', 'MIT', 'ISC', 'None' ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  console.log(data);
  const contents = generateMarkdown(data);
  console.log('Writing the following to file...', contents);

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

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((contents) => {
    writeToFile("README.md", contents);
  });
}

// Function call to initialize app
init();
