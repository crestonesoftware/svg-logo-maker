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
  let logoFile = "";

  switch (shape) {
    case "Square":
      logo = new shapes.Square(color, text, textColor);
      logoFile = constants.LOGO_FILE.square;
      break;
    case "Circle": {
      logo = new shapes.Circle(color, text, textColor);
      logoFile = constants.LOGO_FILE.circle;
    }
  }
  logo.writeToFile(logoFile);
  console.log(`generated ${logoFile}`);
}

const init = () => {
  generateLogo();
};
// INIT
init();
