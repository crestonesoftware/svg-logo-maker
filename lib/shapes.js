const fs = require("fs");
const { SVG_CONTAINER, MAGIC_SUFFIX } = require("./constants.js");

/////////////////////////////////////
// Superclass.
// Not exported because it should not be instantiated.
class Shape {
  width = 0;
  height = 0;
  fillColor = "";
  xmlns = "http://www.w3.org/2000/svg";

  constructor(fillColor) {
    this.width = SVG_CONTAINER.width;
    this.height = SVG_CONTAINER.height;
    this.fillColor = fillColor;
  }
  getData() {
    return `width: ${this.width}, height: ${this.height}, fillColor: ${this.fillColor}, xmlns: ${this.xmlns}`;
  }
  render() {
    throw new Error("Call render() from a child class");
  }

  renderInContainer() {
    this.renderSVGContainer(this.render());
  }

  renderSVGContainer(shape) {
    return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">${shape}</svg>\n\n${constants.MAGIC_SUFFIX}`;
  }

  writeToFile(filePath) {
    fs.writeFileSync(filePath, this.renderInContainer());
  }
}

class Square extends Shape {
  x;
  y;

  constructor(x, y, fillColor) {
    super(fillColor);
    this.x = x;
    this.y = y;
  }
  render() {
    return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fillColor}" />`;
  }
  renderInContainer() {
    return this.renderSVGContainer(
      `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fillColor}" />`
    );
  }

  getData() {
    return `x: ${this.x}, y: ${this.y}, width: ${this.width}, height: ${this.height}, fillColor: ${this.fillColor}, xmlns: ${this.xmlns}`;
  }
}

module.exports = { Square };
