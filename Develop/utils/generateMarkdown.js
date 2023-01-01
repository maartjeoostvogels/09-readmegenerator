// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeUrl;

  // Switch 
  switch (license) {
    case 'Apache License 2.0':
      badgeUrl = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
      break;
    case 'GNU GPLv3':
      badgeUrl = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
      break;
    case 'MIT':
      badgeUrl = 'https://img.shields.io/badge/license-MIT-blue.svg';
      break;
    case 'ISC':
      badgeUrl = 'https://img.shields.io/badge/License-ISC-blue.svg';
      break;
  }

  if (license === 'None') {
    return '';
  }
  else {
    return `![License](${badgeUrl})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  // Switch 
  switch (license) {
    case 'Apache License 2.0':
      licenseLink = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU GPLv3':
      licenseLink = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'MIT':
      licenseLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'ISC':
      licenseLink = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
  }

  if (license === 'None') {
    return '';
  }
  else {
    return `${licenseLink}`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  console.log('generateMarkdown: the license is: ', data.license);

  const licenseBadge = renderLicenseBadge(data.license);

  console.log('generateMarkdown: license badge is: ', licenseBadge);

  const licenseLink = renderLicenseLink(data.license);

  console.log('generateMarkdown: license badge is: ', licenseLink);

  return `# ${data.title}
${licenseBadge}

# License
${licenseLink}
`;
}

module.exports = generateMarkdown;
