const { default: Choices } = require("inquirer/lib/objects/choices");

const questions = [
  {
    type: "input",
    name: "text",
    message: "enter 1-3 characters of text for your logo",
    default: "TCG",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose the shape of your logo",
    choices: ["Circle", "Square", "Triangle"],
    default: "Square",
  },
  {
    type: "input",
    name: "color",
    message: "Enter an HTML color name",
    default: "teal",
  },
];

module.exports = questions;
