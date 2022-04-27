

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None') {
    return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  Here is the license:
  ${renderLicenseBadge(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  ### [Installation](#Installation)
  ### [Usage](#Usage)
  ### [License](#License)
  ### [Tests](#Tests)
  ### [Badges](#Badges)
  ### [Contributing](#Contributing)
  ### [Questions](#Questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Tests
  The command that should be used to run tests is:
  ${data.test}
  ## Badges
  ## Contributing
  ${data.contributing}
  ## Questions
  For additional questions please reach out to me at:
  <${data.email}>
  Or, view my other projects at:
  (https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
