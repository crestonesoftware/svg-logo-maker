/////////////////////////////////////
// Superclass.
// Not exported because it should not be instantiated.
class Shape {
  width = 0;
  height = 0;
  fillColor = "";
  xmlns = "http://www.w3.org/2000/svg";

  constructor(width, height, fillColor) {
    this.width = width;
    this.height = height;
    this.fillColor = fillColor;
  }
  getData() {
    return `width: ${this.width}, height: ${this.height}, fillColor: ${this.fillColor}, xmlns: ${this.xmlns}`;
  }
  render() {
    throw new Error("Call render() from a child class");
  }

  writeToFile(filePath) {
    console.log(`Shape.writeToFile(${filePath})`);
  }
}

class Square extends Shape {
  x;
  y;

  constructor(x, y, width, height, fillColor) {
    super(width, height, fillColor);
    this.x = x;
    this.y = y;
  }
  render() {
    console.log("Square.render() stub");
  }
}

module.exports = { Square, Shape };
