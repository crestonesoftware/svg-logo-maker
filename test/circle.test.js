const { Circle } = require("../lib/shapes");
const { SVG_CONTAINER } = require("../lib/constants");
const fs = require("fs");

const squareWidth = 200;
const squareHeight = 250;
const shapeColor = "yellow";
const textColor = "gray";
const logoText = "AQ";

describe("Shapes", () => {
  describe("Circle", () => {
    // tests constructor
    it("constructor and getData()", () => {
      const newCircle = new Circle(shapeColor, logoText, textColor);
      const expectedData = `x: 0, y: 0, width: ${squareWidth}, height: ${squareHeight}, fillColor: green, xmlns: http://www.w3.org/2000/svg`;
      expect(newCircle.getData()).toEqual(expectedData);
    });

    it("render()", () => {
      const newCircle = new new Circle(shapeColor, logoText, textColor)();
      const expectedData = `<rect x="0" y="0" width="${squareWidth}" height="${squareHeight}" fill="green" />`;
      expect(newCircle.render()).toEqual(expectedData);
    });

    it("renderLogo()", () => {
      const newCircle = new new Circle(shapeColor, logoText, textColor)();
      const expectedData = `${SVG_CONTAINER.open_tags}<rect x="0" y="0" width="${squareWidth}" height="${squareHeight}" fill="green" />
        <text x="45" y="145" fill="white" font-size="60">TCG</text>${SVG_CONTAINER.close_tags}`;
      expect(
        //newCircle.renderLogo(newCircle.render(), newCircle.renderText())
        newCircle.renderLogo()
      ).toEqual(expectedData);
    });

    it("writeToFile()", () => {
      const newCircle = new new Circle(shapeColor, logoText, textColor)();
      const filePath = "./tmp/newCircle.html";
      const expectedData = `${SVG_CONTAINER.open_tags}<rect x="0" y="0" width="${squareWidth}" height="${squareHeight}" fill="green" />
        <text x="45" y="145" fill="white" font-size="60">TCG</text>${SVG_CONTAINER.close_tags}`;

      newCircle.writeToFile(filePath);
      expect(() => fs.existsSync(filePath));
      expect(fs.readFileSync(filePath, "utf8")).toEqual(expectedData);
    });
  });
});
