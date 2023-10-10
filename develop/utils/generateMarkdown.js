// Function to generate the license badge and link
function generateLicenseBadge(licenseName, licenseUrl) {
  const renderLicenseBadge = `[![License: ${licenseName}](${getBadgeUrl(licenseName)})](${licenseUrl})`;
  return badge;
}

// Function to generate the URL for a license badge based on the license name
function getBadgeUrl(licenseName) {
  // Define mappings of license names to shields.io badge URLs
  const licenseBadgeUrls = {
      MIT: 'https://img.shields.io/badge/License-MIT-yellow.svg',
      'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      'GPL 3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
      // Add more mappings for other licenses if needed
  };

  // Get the badge URL for the specified license name
  const badgeUrl = licenseBadgeUrls[licenseName];

  if (!badgeUrl) {
      throw new Error(`Badge URL not found for license: ${licenseName}`);
  }

  return badgeUrl;
}


function generateMarkdown(answers) {
  let readmeContent = '';

  // Generate the title section
  readmeContent += `# ${answers.project_title}\n\n`;

  // Generating description section
  readmeContent += `## Description\n\n${answers.project_description}\n\n`;

  // Table of Contents with links to sections
  readmeContent += `## Table of Contents\n\n`;

  // Add links to the sections
  readmeContent += `- [Installation](#installation)\n`;
  readmeContent += `- [Usage](#usage)\n`;
  readmeContent += `- [License](#license)\n`;
  readmeContent += `- [Tests](#tests)\n`;
  readmeContent += `- [Questions](#questions)\n\n`;

  // Generate installation
  readmeContent += `## Installation\n\n${answers.installation_instructions}\n\n`;

  // Generate Usage
  readmeContent += `## Usage\n\n${answers.usage_instructions}\n\n`;

  // Generate License Badge (using renderLicenseBadge function)
  const licenseBadge = renderLicenseBadge(answers.license_name);
  readmeContent += `## License\n\n${licenseBadge}\n\n`;

  // Generate Contributing
  readmeContent += `## Contributing\n\n${answers.contribution_guidelines}\n\n`;

  // Generate Tests
  readmeContent += `## Tests\n\n${answers.test_instructions}\n\n`;

  // Questions section with GitHub and email links
  readmeContent += `## Questions\n\n`;
  readmeContent += `- **GitHub**: [${answers.your_name}](https://github.com/${answers.your_name})\n`;
  readmeContent += `- **Email**: [${answers.your_email}](mailto:${answers.your_email})\n`;

  return readmeContent;
}
