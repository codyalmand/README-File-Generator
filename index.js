const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generate = require("./generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description for the project"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions for the project"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the usage for the project"
    },
    {
        type: "input",
        name: "contributors",
        message: "Please provide contributor information for the project"
    },
    {
        type: "input",
        name: "license",
        message: "Please provide licenses to include for the project"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide tests for the project"
    },
    {
        type: "input",
        name: "username",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repository link for the project?"
    },

];

inquirer
    .prompt(questions)
    .then(function (data) {
        fs.writeFile("README.md", generate(data), function (err) {
            if (err) {
                throw err;
            };
            console.log("New README file created!");
        });
    });

function init() {}

init();