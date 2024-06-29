const { Square, Shape } = require("../lib/shapes");
//const { SVG_CONTAINER, MAGIC_SUFFIX } = require("../lib/constants");
const { SVG_CONTAINER } = require("../lib/constants");
const fs = require("fs");

const squareWidth = 200;
const squareHeight = 250;

describe("Shapes", () => {
  describe("Square", () => {
    // tests constructor
    it("constructor and getData()", () => {
      const newSquare = new Square("green", "TCG", "white");
      const expectedData = `x: 0, y: 0, width: ${squareWidth}, height: ${squareHeight}, fillColor: green, xmlns: http://www.w3.org/2000/svg`;
      expect(newSquare.getData()).toEqual(expectedData);
    });

    it("render()", () => {
      const newSquare = new Square("green", "TCG", "white");
      const expectedData = `<rect x="0" y="0" width="${squareWidth}" height="${squareHeight}" fill="green" />`;
      expect(newSquare.render()).toEqual(expectedData);
    });

    it("renderLogo()", () => {
      const newSquare = new Square("green", "TCG", "white");
      const expectedData = `${SVG_CONTAINER.open_tags}<rect x="0" y="0" width="${squareWidth}" height="${squareHeight}" fill="green" />
        <text x="45" y="145" fill="white" font-size="60">TCG</text>${SVG_CONTAINER.close_tags}`;
      expect(
        //newSquare.renderLogo(newSquare.render(), newSquare.renderText())
        newSquare.renderLogo()
      ).toEqual(expectedData);
    });

    it("writeToFile()", () => {
      const newSquare = new Square("green", "TCG", "white");
      const filePath = "./tmp/newSquare.html";
      const expectedData = `${SVG_CONTAINER.open_tags}<rect x="0" y="0" width="${squareWidth}" height="${squareHeight}" fill="green" />
        <text x="45" y="145" fill="white" font-size="60">TCG</text>${SVG_CONTAINER.close_tags}`;

      newSquare.writeToFile(filePath);
      expect(() => fs.existsSync(filePath));
      expect(fs.readFileSync(filePath, "utf8")).toEqual(expectedData);
    });
  });
});
