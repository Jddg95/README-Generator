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


// Function to generate README content based on user input
function generateReadme(answers) {
    // Create a template string for the README content
    const readmeContent = `
  # ${answers.project_title}
  
  ## Description
  
  ${answers.project_description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${answers.installation_instructions}
  
  ## Usage
  
  ${answers.usage_instructions}
  
  ## License
  
  This project is licensed under the ${answers.license_name} license.
  
  ## Contributing
  
  ${answers.contribution_guidelines}
  
  ## Tests
  
  ${answers.test_instructions}
  
  ## Questions
  
  For any questions or inquiries, please reach out to me:
  
  - **GitHub**: [${answers.your_name}](https://github.com/${answers.your_name})
  - **Email**: [${answers.your_email}](mailto:${answers.your_email})
    `;
  
    // Return the generated README content as a string
    return readmeContent;
  }
  


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
    fs.writeFileSync(fileName, data);
    console.log(`${fileName} has been generated successfully!`);
} catch (error) {
    console.error(`An error occured while writing ${fileName}:`, error);
}}


// TODO: Create a function to initialize app
function init() {
    // Use Inquirer.js to prompt the user for input 
    inquirer.prompt(questions).then((answers) => {
        // Create README content using the provided information 
        const readmeContent = generateReadme(answers);
        // Specify the file name where you want to save the README
        const fileName = 'README.md';
        // Write the README.md file using the writeToFile function (corrected function name)
        writeToFile(fileName, readmeContent);
    });
}


// Function call to initialize app
init();