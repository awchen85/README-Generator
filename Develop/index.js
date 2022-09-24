// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'test',
            message: "What is the test of your README?",
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter a test!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Table of Contents',
            message: "What is your Table of Contents?",
            validate: tableInput => {
                if (tablenInput) {
                    return true;
                } else {
                    console.log('Please enter a Table of Contents!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Installation',
            message: "What are installation instructions?",
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter how to install!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Usage',
            message: "What is the usage information?",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'License',
            message: "What licenses are needed?",
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please enter licenses!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Contribution',
            message: "What are the contribution guidelines?",
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please enter contribution guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Test',
            message: "What are the test instructions?",
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter testing instructions!');
                    return false;
                }
            }
        },
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
