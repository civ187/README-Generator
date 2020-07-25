
const fs = require ('fs');
const inquirer = require ('inquirer');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "repositoryName",
        message: "Enter the name/title of application! (Required)",
        validate: (repoNameInput) => {
            if (repoNameInput) {
            return true;
            } else {
            console.log("Enter the name of app!");
            return false;
            }
        },
    },

    {
        type: "input",
        name: "githubUser",
        message: "Enter your Github username! (Required)",
        validate: (githubUserInput) => {
            if (githubUserInput) {
              return true;
            } else {
              console.log("Enter your Github username!");
              return false;
            }
        },
    },

    {
        type: "input",
        name: "description",
        message: "Enter a description for your app! (Required)",
        validate: (descInput) => {
            if (descInput) {
              return true;
            } else {
              console.log("Enter a description!");
              return false;
            }
        },
    },

    {
        type: "input",
        name: "installation",
        message: "Enter some instructions for users to install your app! (Required)",
        validate: (instalInput) => {
            if (instalInput) {
              return true;
            } else {
              console.log("Enter some instructions!");
              return false;
            }
        },
    },

    {
        type: "input",
        name: "usage",
        message: "Enter some instructions for users to use your app! (Required)",
        validate: (usageInput) => {
            if (usageInput) {
              return true;
            } else {
              console.log("Enter some instructions!");
              return false;
            }
        },
    },

    {
        type: "list",
        name: "license",
        message: "What is the licensing for your app?(Required)",
        choices: ["GPL V3", "EPL 1.0", "MIT", "MPL 2.0", "none"],
        validate: (licenseInput) => {
            if (licenseInput) {
              return true;
            } else {
              console.log("Enter none for no license!");
              return false;
            }
        },
    },

    {
        type: "confirm",
        name: "confirmIssues",
        message: "Would you like people to report issues?",
        default: false,
    },

    {
        type: "input",
        name: "issues",
        message: "Provide a way for users to contact you!",
        when: ({ confirmIssues }) => confirmIssues,
    },

    {
        type: "input",
        name: "contributors",
        message: 'List other contributors, if no others type "none"?(Required)',
        validate: (contributorsInput) => {
            if (contributorsInput) {
              return true;
            } else {
              console.log("Enter none for no contributors!");
              return false;
            }
        },
    },

    {
      type: "input",
      name: "tests",
      message: "List the tests that have been preformed on this app!(Required)",
      validate: (testsInput) => {
        if (testsInput) {
          return true;
        } else {
          console.log("List Tests Completed!");
          return false;
        }
      },
    },

    {
        type: "input",
        name: "contact",
        message: "Enter an email address for users to contact you and ask questions!(Required)",
        validate: (contactInput) => {
            if (contactInput) {
              return true;
            } else {
              console.log("Contact info added!");
              return false;
            }
        },
    },
];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
    inquirer.prompt(questions);
    

}//end of init function

// function call to initialize program
init();
