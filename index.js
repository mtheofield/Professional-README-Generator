// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


const promptUser = async () => {
    let data = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is your license type?',
            choices: ["No Licence", "MIT"]
        }
    ]);
    console.log(data)

    fs.writeFile('./READMe.md', generateMarkdown(data), err => {
        if (err) throw err;
    
        console.log('Portfolio complete! Check out index.html to see the output!');
    });
};


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { 
    promptUser()
}

// Function call to initialize app
init();
