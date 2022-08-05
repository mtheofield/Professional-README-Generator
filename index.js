// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your projects name?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project and why you choose to create it',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How can a user install this application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please include instructions for the usage of the project',
    },
    {
      type: 'list',
      message: 'Choose a license for the application',
      name: 'license',
      choices: ['None', 'MPL', 'ODbl', 'GPL', 'MIT', 'ISC'],
    },
    {
    type: 'input',
    name: 'contribute',
    message: 'List all collaborators and links to their GitHub Profile',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How can a user test the application?',
    }, 
    {
      type: 'input',
      name: 'username',
      message: 'Add your github so users can ask questions',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("You have created a README");
    });
  };

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        const data = generateMarkdown(userAnswers);
        console.log(userAnswers);
        writeToFile('README.md', data);
    })
}
// Function call to initialize app
init();
