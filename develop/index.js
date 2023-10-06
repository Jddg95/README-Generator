// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project_title',
        message: 'Enter the project title:',
      },
      {
        type: 'input',
        name: 'project_description',
        message: 'Enter a brief project description:',
      },
      {
        type: 'input',
        name: 'installation_instructions',
        message: 'Enter the installation instructions:',
      },
      {
        type: 'input',
        name: 'usage_instructions',
        message: 'Enter the usage instructions:',
      },
      {
        type: 'input',
        name: 'license_name',
        message: 'Enter the license name:',
      },
      {
        type: 'input',
        name: 'your_name',
        message: 'Enter your name:',
      },
      {
        type: 'input',
        name: 'your_email',
        message: 'Enter your email address:',
      },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
