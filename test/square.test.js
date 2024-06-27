const { Square, Shape } = require("../lib/shapes");
const { SVG_CONTAINER, MAGIC_SUFFIX } = require("../lib/constants");
const fs = require("fs");

describe("Shapes", () => {
  describe("Square", () => {
    // tests constructor
    it("constructor and getData()", () => {
      const newSquare = new Square(50, 50, 100, 100, "green");
      const expectedData =
        "x: 50, y: 50, width: 100, height: 100, fillColor: green, xmlns: http://www.w3.org/2000/svg";
      expect(newSquare.getData()).toEqual(expectedData);
    });

    it("render()", () => {
      const newSquare = new Square(50, 50, 100, 100, "green");
      const expectedData = `<rect x="50" y="50" width="100" height="100" fill="green" />`;
      expect(newSquare.render()).toEqual(expectedData);
    });

    it("renderInContainer()", () => {
      const newSquare = new Square(50, 50, 100, 100, "green");
      const expectedData = `<svg width="${SVG_CONTAINER.width}" height="${SVG_CONTAINER.height}" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="100" height="100" fill="green" /></svg>${MAGIC_SUFFIX}`;
      expect(newSquare.renderInContainer()).toEqual(expectedData);
    });

    it("writeToFile()", () => {
      const newSquare = new Square(50, 50, 100, 100, "green");
      const filePath = "./tmp/newSquare.html";
      const expectedData = `<svg width="${SVG_CONTAINER.width}" height="${SVG_CONTAINER.height}" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="100" height="100" fill="green" /></svg>${MAGIC_SUFFIX}`;

      newSquare.writeToFile(filePath);
      expect(() => fs.existsSync(filePath));
      expect(fs.readFileSync(filePath, "utf8")).toEqual(expectedData);
    });
  });
});
