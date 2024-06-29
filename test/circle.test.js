const { Circle } = require("../lib/shapes");
const { SVG_CONTAINER } = require("../lib/constants");
const fs = require("fs");

const squareWidth = 200;
const squareHeight = 250;
const shapeColor = "yellow";
const textColor = "gray";
const logoText = "AQ";
const circleElement = `<circle cx="100" cy="100" r="100" fill="${shapeColor}" />`;
const textElement = `<text x="60" y="120" fill="${textColor}" font-size="60">${logoText}</text>`;

describe("Shapes", () => {
  describe("Circle", () => {
    it("render()", () => {
      const newCircle = new Circle(shapeColor, logoText, textColor);
      const expectedData = `${circleElement}`;
      expect(newCircle.render()).toEqual(expectedData);
    });

    it("renderLogo()", () => {
      const newCircle = new Circle(shapeColor, logoText, textColor);
      const expectedData = `${SVG_CONTAINER.open_tags}${circleElement}
        ${textElement}${SVG_CONTAINER.close_tags}`;
      expect(newCircle.renderLogo()).toEqual(expectedData);
    });

    it("writeToFile()", () => {
      const newCircle = new Circle(shapeColor, logoText, textColor);
      const filePath = "./tmp/newCircle.html";
      const expectedData = `${SVG_CONTAINER.open_tags}${circleElement}
        ${textElement}${SVG_CONTAINER.close_tags}`;

      newCircle.writeToFile(filePath);
      expect(() => fs.existsSync(filePath));
      expect(fs.readFileSync(filePath, "utf8")).toEqual(expectedData);
    });
  });
});
