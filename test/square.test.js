const { Square, Shape } = require("../lib/shapes");
//const { SVG_CONTAINER, MAGIC_SUFFIX } = require("../lib/constants");
const { SVG_CONTAINER } = require("../lib/constants");
const fs = require("fs");

describe("Shapes", () => {
  describe("Square", () => {
    // tests constructor
    it("constructor and getData()", () => {
      const newSquare = new Square(50, 50, 100, 100, "green", "TCG");
      const expectedData =
        "x: 50, y: 50, width: 100, height: 100, fillColor: green, xmlns: http://www.w3.org/2000/svg";
      expect(newSquare.getData()).toEqual(expectedData);
    });

    it("render()", () => {
      const newSquare = new Square(50, 50, 100, 100, "green", "TCG");
      const expectedData = `<rect x="50" y="50" width="100" height="100" fill="green" />`;
      expect(newSquare.render()).toEqual(expectedData);
    });

    it("renderInContainer()", () => {
      const newSquare = new Square(50, 50, 100, 100, "green", "TCG");
      const expectedData = `${SVG_CONTAINER.open_tags}<rect x="50" y="50" width="100" height="100" fill="green" />${SVG_CONTAINER.close_tags}`;
      expect(newSquare.renderInContainer()).toEqual(expectedData);
    });

    it("writeToFile()", () => {
      const newSquare = new Square(50, 50, 100, 100, "green", "TCG");
      const filePath = "./tmp/newSquare.html";
      const expectedData = `${SVG_CONTAINER.open_tags}<rect x="50" y="50" width="100" height="100" fill="green" />${SVG_CONTAINER.close_tags}`;

      newSquare.writeToFile(filePath);
      expect(() => fs.existsSync(filePath));
      expect(fs.readFileSync(filePath, "utf8")).toEqual(expectedData);
    });
  });
});
