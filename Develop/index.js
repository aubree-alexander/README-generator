// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
},
{
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project.'
},
{
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project.'
},
{
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions and examples for use.'
},
{
    type: 'list',
    name: 'license',
    message: 'Please select a license.',
    choices: ['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Perl', 'SIL', 'Unlicense', 'WTFPL', 'Zlib', 'None']
},
{
    type: 'input',
    name: 'contributing',
    message: 'Please describe how others can contribute to this project.'
}
//  Contributing, Tests, and Questions

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    //AA - question - why isn't this syntax listed on inquirer npm website? Found this in a google search.
    inquirer.prompt(questions)
    .then(function(response) {
        //AA - question - is this correct? specifically generateMarkdown?
        return fs.writeFileSync('README.md', generateMarkdown, function(err) {
            if (err) {
                throw err;
            };
        });
     
}

// Function call to initialize app
init();
