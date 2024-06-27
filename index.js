// DEPENDENCIES
const inquirer = require("inquirer");
const questions = require("./lib/inquirer-questions.js");
const shapes = require("./lib/shapes.js");
const constants = require("./lib/constants.js");

// DATA

// FUNCTIONS

async function generateLogo() {
  const answers = await inquirer.prompt(questions);
  const { shape, text, color } = answers;
  let logo = "";

  switch (shape) {
    case "Square":
      logo = new shapes.Square(100, 100, 100, 100, color);
      logo.writeToFile(constants.LOGO_FILE);
  }
}

const init = () => {
  generateLogo();
};
// INIT
init();
