function generateMarkdown(answers) {
  let readmeContent = '';

  // Generate the title section
  readmeContent += `# ${answers.project_title}\n\n`;

  // Generating description section
  readmeContent += `## Description\n\n${answers.project_description}\n\n`;

  // Table of Contents with links to sections
  readmeContent += `## Table of Contents\n\n`;

  // add links to sections 
  readmeContent += `- [Installation](#installation)\n`
  readmeContent += `- [Usage](#usage)\n`
  readmeContent += `- [License](#license)\n`
  readmeContent += `- [Contributing](#contributing)\n`
  readmeContent += `- [Tests](#tests)`
  readmeContent += `- [Questions](#questions)\n`

  // Generate installation
  readmeContent += `## Installation\n\n${answers.installation_instructions}\n\n`;

  // Generate Usage
  readmeContent += `## Usage\n\n${answers.usage_instructions}\n\n`;

  // Generate License Badge (using renderLicenseBadge function)
  const licenseBadge = renderLicenseBadge(answers.license_name);
  readmeContent += `## License\n\n${licenseBadge}\n\n`;

  // Generate Tests
  readmeContent += `## Tests\n\n${answers.test_instructions}\n\n`;

  return readmeContent;
}
