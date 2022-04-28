
// Create license badge or empty string based on user input
function renderLicenseBadge(license) {
  if(license !== 'None') {
    return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`
  } else {
    return ''
  }
};

// Create license link if user selects one during prompt
function renderLicenseLink(license) {
  if (license === 'APACHE') {
    return '(https://opensource.org/licenses/MIT)';
  } else if (license === 'MIT') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL') {
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD') {
    return '(https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'None') {
    return ''
  }
}

// Create license section if users chooses license during prompts
function renderLicenseSection(license) {
  return `
  ${renderLicenseBadge(license)}
  `
}

// Create license link section if user chooses license during prompts
function renderLicenseLinkSection(license) {
  return `
  ## License
  See information regarding the license here:
  [License Information](${renderLicenseLink(license)})
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
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
  ${renderLicenseLinkSection(data.license)}
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
