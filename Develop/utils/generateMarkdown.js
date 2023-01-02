const licenses = {
  'Apache License 2.0': {
    badgeUrl: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    url: 'https://opensource.org/licenses/Apache-2.0',
    label: 'Apache 2'
  },
  'GNU GPLv3': {
    badgeUrl: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    url: 'https://www.gnu.org/licenses/gpl-3.0',
    label: 'GPL v3'
  },
  'MIT': {
    badgeUrl: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    url: 'https://opensource.org/licenses/MIT',
    label: 'MIT'
  },
  'ISC': {
    badgeUrl: 'https://img.shields.io/badge/License-ISC-blue.svg',
    url: 'https://opensource.org/licenses/ISC',
    label: 'ISC'
  },
};

function renderLicenseBadge(license) {
  const licenseData = licenses[license];

  if (!licenseData) {
    return '';
  }

  return `![License](${licenseData.badgeUrl})`;
}

function renderLicenseLink(license) {
  const licenseData = licenses[license];
  
  if (!licenseData) {
    return '';
  }

  return `[${licenseData.label}](${licenseData.url})`;
}


function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }

  const licenseLink = renderLicenseLink(license);
  
  return `## License

Licensed under the ${licenseLink} license.`;
}

function generateMarkdown(data) {
  const {license} = data;
  const licenseBadge = renderLicenseBadge(license);
  const licenseSection = renderLicenseSection(license);

  return `# ${data.title}
${licenseBadge}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${licenseSection ? '- [License](#license)' : ''}
- [Contribute](#contribute)
- [Tests](#tests)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

${licenseSection}

## Contribute
${data.contribute}

## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;