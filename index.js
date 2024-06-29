// DEPENDENCIES
const inquirer = require("inquirer");
const questions = require("./lib/inquirer-questions.js");
const shapes = require("./lib/shapes.js");
const constants = require("./lib/constants.js");

// DATA

// FUNCTIONS

async function generateLogo() {
  const answers = await inquirer.prompt(questions);
  const { shape, text, color, textColor } = answers;
  let logo = "";

  switch (shape) {
    case "Square":
      logo = new shapes.Square(0, 0, 200, 250, color, text, textColor);
      logo.writeToFile(constants.LOGO_FILE);
  }
  console.log(`generated logo.svg`);
}

const init = () => {
  generateLogo();
};
// INIT
init();
