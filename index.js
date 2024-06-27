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
      logo = new shapes.Square(100, 100, 100, 100, color, text);
      console.log(logo);
      logo.writeToFile(constants.LOGO_FILE);
  }
  console.log(
    `generated a ${logo.fillColor} ${logo.constructor.name} with text ${logo.text}`
  );
}

const init = () => {
  generateLogo();
};
// INIT
init();
