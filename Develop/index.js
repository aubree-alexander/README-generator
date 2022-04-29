// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



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
    choices: ['APACHE', 'MIT', 'GPL', 'BSD', 'None']
},
{
    type: 'input',
    name: 'contributing',
    message: 'Please describe how others can contribute to this project.'
},
{
    type: 'input',
    name: 'test',
    message: 'What command should run to run tests?',
    default: 'npm test'
},
{
    type: 'input',
    name: 'github',
    message: 'Please enter your Github username.'
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.'
}

];


// TODO: Create a function to initialize app
function init() {
    
    inquirer.prompt(questions)
    .then(function(response) {
        
        return fs.writeFileSync('README.md', generateMarkdown(response), function(err) {
            if (err) {
                throw err;
            };
        });
    })
}

// Function call to initialize app
init();

