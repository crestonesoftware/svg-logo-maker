const fs = require("fs");
//const { SVG_CONTAINER, MAGIC_SUFFIX } = require("./constants.js");
const { SVG_CONTAINER } = require("./constants.js");

/////////////////////////////////////
// Superclass
class Shape {
  xmlns = "http://www.w3.org/2000/svg";

  constructor(fillColor, text) {
    this.containerWidth = SVG_CONTAINER.width;
    this.containerHeight = SVG_CONTAINER.height;
    this.fillColor = fillColor;
    this.text = text;
  }
  getData() {
    return `container width: ${this.containerWidth}, container height: ${this.containerHeight}, fillColor: ${this.fillColor}, xmlns: ${this.xmlns}`;
  }
  render() {
    throw new Error("Call render() from a child class");
  }

  renderText() {
    return `    <text x="50" y="120" fill="red" font-size="60">${this.text}</text>`;
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

  constructor(x, y, width, height, fillColor, text) {
    super(fillColor, text);
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
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
