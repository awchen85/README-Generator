// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");

const generateReadme = require("./utils/generateReadme");

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: "What would you like your description to be?",
        },
        {
            type: 'input',
            name: 'install',
            message: "What are installation instructions?",
        },
        {
            type: 'input',
            name: 'usage',
            message: "What is the usage information?",
        },
        {
            type: 'list',
            name: 'license',
            message: "What licenses are needed?",
            choices: [
                " MIT",
                "Apache",
                "GNU",
                "ISC",
                "Mozilla",
                "Open"],
        },
        {
            type: 'input',
            name: 'contribution',
            message: "What are the contribution guidelines?",
        },
        {
            type: 'input',
            name: 'test',
            message: "What are the test instructions?",
        },
        {
            type: 'input',
            name: 'Github',
            message: "What is your Github username?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email address?",
        },
        {
            type: 'input',
            name: 'questions',
            message: "Who do I do if I have issues?"
        }
    ];

const promptUser= () => {
return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./Output/README.md", data, (err) => {
        if (err) {
            reject(err);
            return;
        }
        resolve();
});
});
}

// TODO: Create a function to initialize app
function init() {
    promptUser(questions)
    .then((answers) => {
        return generateReadme(answers);
    })
    .then ((readmeWrite) => {
        return writeToFile(readmeWrite);
    })
    .then((response) => {
        console.log(response);
    })
.catch(err => {
    console.log(err);
});
}

// Function call to initialize app
init();