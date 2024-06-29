const fs = require("fs");
//const { SVG_CONTAINER, MAGIC_SUFFIX } = require("./constants.js");
const { SVG_CONTAINER } = require("./constants.js");

/////////////////////////////////////
// Superclass
class Shape {
  xmlns = "http://www.w3.org/2000/svg";

  constructor(fillColor, text, textColor) {
    this.containerWidth = SVG_CONTAINER.width;
    this.containerHeight = SVG_CONTAINER.height;
    this.fillColor = fillColor;
    this.textColor = textColor;
    this.text = text;
  }
  getData() {
    return `container width: ${SVG_CONTAINER.width}, container height: ${SVG_CONTAINER.height}, fillColor: ${this.fillColor}, xmlns: ${this.xmlns}`;
  }
  render() {
    throw new Error("Call render() from a child class");
  }

  renderText() {
    let xText = 45;
    if (this.text.length == 2) xText += 15;
    else if (this.text.length == 1) xText += 35;
    return `    <text x="${xText}" y="145" fill="${this.textColor}" font-size="60">${this.text}</text>`;
  }

  renderInContainer() {
    console.log(this.renderText());
    this.renderSVGContainer(this.render(), this.renderText());
  }

  renderSVGContainer(shapeElement, textElement) {
    return `${SVG_CONTAINER.open_tags}${shapeElement}
    ${textElement}${SVG_CONTAINER.close_tags}`;
  }

  writeToFile(filePath) {
    fs.writeFileSync(filePath, this.renderInContainer());
  }
}

/////////////////////////////////////
// Sub-classes
//
// SQUARE

class Square extends Shape {
  x;
  y;

  constructor(fillColor, text, textColor) {
    super(fillColor, text, textColor);
    this.x = 0;
    this.y = 0;
    this.height = 250;
    this.width = 200;
  }
  render() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fillColor}" />`;
  }
  renderInContainer() {
    return this.renderSVGContainer(
      `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fillColor}" />`,
      this.renderText()
    );
  }

  getData() {
    return `x: ${this.x}, y: ${this.y}, width: ${this.width}, height: ${this.height}, fillColor: ${this.fillColor}, xmlns: ${this.xmlns}`;
  }
}

module.exports = { Square, Shape };
