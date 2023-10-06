function generateMarkdown(answers) {
  let readmeContent = '';

  // Generate the title section
  readmeContent += `# ${answers.project_title}\n\n`;

  // Generating description section
  readmeContent += `## Description\n\n${answers.project_description}\n\n`;

  // Generate installation
  readmeContent += `## Installation\n\n${answers.installation_instructions}\n\n`;

  // Generate Usage
  readmeContent += `## Usage\n\n${answers.usage_instructions}\n\n`;

  // Generate License Badge (using renderLicenseBadge function)
  const licenseBadge = renderLicenseBadge(answers.license_name);
  readmeContent += `## License\n\n${licenseBadge}\n\n`;

  // Generate Contributing
  readmeContent += `## Contributing\n\n${answers.contribution_guidelines}\n\n`;

  // Generate Test
  readmeContent += `## Tests\n\n${answers.test_instructions}\n\n`;

  return readmeContent;
}
