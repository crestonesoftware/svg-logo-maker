const fs = require("fs");
//const { SVG_CONTAINER, MAGIC_SUFFIX } = require("./constants.js");
const { SVG_CONTAINER, SHAPE } = require("./constants.js");

/////////////////////////////////////
// Superclass
class Shape {
  xmlns = "http://www.w3.org/2000/svg";
  // all other data started our here but made there way to Constants.js because they are fixed
  // if I were to extend this application such that there data were not fixed, they might make there way back here
  // however, in the immediate, it became simpler to have them enumerated in Constants
  constructor(fillColor, text, textColor) {
    this.fillColor = fillColor;
    this.textColor = textColor;
    this.text = text;
  }

  // this function was useful for development only. I could have dropped it, but kept it for
  // the sake of being thorough and for practice with Jest
  getData() {
    return `container width: ${SVG_CONTAINER.width}, container height: ${SVG_CONTAINER.height}, fillColor: ${this.fillColor}, xmlns: ${this.xmlns}`;
  }

  render() {
    // render() must be called from a child class because every shape has specific considerations;
    // it's not useful to call it here on the superclass
    throw new Error("render() must be overridden by a subclass");
  }

  // text is the same no matter the shape, so we can define this here
  renderText() {
    let xText = SHAPE.TEXT.xOriginBase;
    if (this.text.length == 2) xText += 15;
    else if (this.text.length == 1) xText += 35;
    return `    <text x="${xText}" y="${SHAPE.TEXT.yOrigin}" fill="${this.textColor}" font-size="${SHAPE.TEXT.fontSize}">${this.text}</text>`;
  }

  // this class provides the container and the text, so we can call this here.
  // the call to render() takes care of the shape-specific details
  renderLogo() {
    return this.renderLogoHTML(this.render(), this.renderText());
  }

  renderLogoHTML(shapeElement, textElement) {
    return `${SVG_CONTAINER.open_tags}${shapeElement}
    ${textElement}${SVG_CONTAINER.close_tags}`;
  }

  writeToFile(filePath) {
    fs.writeFileSync(
      filePath,
      this.renderLogo(this.render(), this.renderText())
    );
  }
}

/////////////////////////////////////
// Sub-classes
//
// SQUARE

class Square extends Shape {
  constructor(fillColor, text, textColor) {
    super(fillColor, text, textColor);
    this.xOrigin = SHAPE.SQUARE.xOrigin;
    this.yOrigin = SHAPE.SQUARE.yOrigin;
    this.width = SHAPE.SQUARE.width;
    this.height = SHAPE.SQUARE.height;
  }
  render() {
    return `<rect x="${this.xOrigin}" y="${this.yOrigin}" width="${this.width}" height="${this.height}" fill="${this.fillColor}" />`;
  }
  renderInContainer() {
    return this.renderSVGContainer(this.render(), this.renderText());
  }

  getData() {
    return `x: ${this.xOrigin}, y: ${this.yOrigin}, width: ${this.width}, height: ${this.height}, fillColor: ${this.fillColor}, xmlns: ${this.xmlns}`;
  }
}

class Circle extends Shape {
  /* <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" fill="red" />
</svg> */
  constructor(fillColor, text, textColor) {
    super(fillColor, text, textColor);
    this.xCenter = SHAPE.CIRCLE.xCenter;
    this.yCenter = SHAPE.CIRCLE.yCenter;
    this.radius = SHAPE.CIRCLE.radius;
  }

  render() {
    return `<circle cx="100" cy="100" r="100" fill="${this.fillColor}" />`;
  }
}

module.exports = { Square, Shape, Circle };
