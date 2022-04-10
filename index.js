//imports file system from node
const fs = require("fs");
//imports inquirer from npm
const inquirer = require("inquirer");
//sends data to read-me-template page
const generatePage = require("./utils/generateMarkdown");

//prompts user to start
const promptUser = () => {
  console.log("Answer the following questions to generate your README file.")
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project for your README",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter a title for your README");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Add a description of your project",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter a description for your project");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Add usage instructions",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please enter usage instructions");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "install",
      message: "Add installation instructions for your project",
      validate: (installInput) => {
        if (installInput) {
          return true;
        } else {
          console.log("Please enter installation instructions");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contributing",
      message: "Add instructions for contributing to this project",
      validate: (contributingInput) => {
        if (contributingInput) {
          return true;
        } else {
          console.log("Please enter contributing instructions");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "test",
      message: "Provide instructions on how to run tests on your program",
      validate: (testInput) => {
        if (testInput) {
          return true;
        } else {
          console.log("Please enter test instructions");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your github username",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your github username");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      choices: [
        "MIT",
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "Boost Software License 1.0",
      ],
      message: "Please enter your github username",
      validate: (githubInput) => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter your github username");
          return false;
        }
      },
    },
  ]);
};

const writeFile = (filecontent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("generated-README-.md", filecontent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "Read me created!",
      });
    });
  });
};

promptUser()
  .then((readMeData) => {
    return generatePage(readMeData);
  })
  .then((readMeMD) => {
    console.log("Your README file has been created!");
    return writeFile(readMeMD);
  })
  .catch((err) => console.log(err));