// DEPENDENCIES
const inquirer = require("inquirer");
const questions = require("./lib/inquirer-questions.js");

// DATA

// FUNCTIONS

async function generateLogo() {
  console.log("generateLogo");
  const answers = await inquirer.prompt(questions);
  
}

const init = () => {
  generateLogo();
};
// INIT
init();
