// TODO: Include packages needed for this application

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [

    {
    type: 'input',
    name: 'title',
    message: 'Project Title',
    },
      {
    type: 'input',
    name: 'Description',
    message: 'Project description',
    },
    {
     type: 'input',
    name: 'Installation',
    message: 'Installation instructions',
     },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is the sue of this ?',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Who are the contributors?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'questions? github',
    },
    {
        type: 'input',
        name: 'email',
        message: 'questions? email',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License',
        choices: ['MIT', 'ISC','GPL 3.0'],
    },

];

// TODO: Create a function to write README file


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
  
  
  function init() {
    inquirer.prompt(questions).then((userInput) => {
      writeToFile('README.md', generateMarkdown({ ...userInput }));
    });
  }
  
  init();
  