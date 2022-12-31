// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What was your motivation to build this project?',
        name: 'motivation',
      },
//      {
//          type: 'input',
//          message: 'What problem does it solve?',
//          name: 'problemsolve',
//      },
//      {
//          type: 'input',
//          message: 'What did you learn?',
//          name: 'username',
//      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
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
    inquirer.prompt(questions).then((answers) => {
        writeToFile("README.md", answers)
      });
}

// Function call to initialize app
init();
