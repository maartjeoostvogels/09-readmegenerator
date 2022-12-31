// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeUrl;
  switch (license) {
    case 'Apache License 2.0':
      badgeUrl = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
    case 'GNU GPLv3':
      badgeUrl = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    case 'MIT':
      badgeUrl = 'https://img.shields.io/badge/license-MIT-blue';
    case 'ISC':
      badgeUrl = 'https://img.shields.io/badge/License-ISC-blue.svg';
    case 'None':
      badgeUrl = '';
  }

  return `![License](${badgeUrl})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  console.log('generateMarkdown: the license is: ', data.license);

  const licenseBadge = renderLicenseBadge(data.license);

  console.log('generateMarkdown: license badge is: ', licenseBadge);

  return `# ${data.title}
${licenseBadge}

# License
`;
}

module.exports = generateMarkdown;
