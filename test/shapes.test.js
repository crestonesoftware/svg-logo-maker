const { Square, Shape } = require("../lib/shapes");
const { SVG_CONTAINER } = require("../lib/constants.js");
const fs = require("fs");

describe("Shapes", () => {
  describe("Shape", () => {
    it("constructor and getData()", () => {
      const newShape = new Shape("red", "TCG");
      const expectedData = `container width: ${SVG_CONTAINER.width}, container height: ${SVG_CONTAINER.height}, fillColor: red, xmlns: http://www.w3.org/2000/svg`;
      expect(newShape.getData()).toEqual(expectedData);
    });

    it("render()", () => {
      const newShape = new Shape("blue", "TCG");
      expect(() => newShape.render()).toThrow(
        "Call render() from a child class"
      );
    });

    it("renderLogo()", () => {
      const newShape = new Shape("blue", "TCG");
      expect(() => newShape.renderLogo()).toThrow(
        "Call render() from a child class"
      );
    });
    it("writeToFile() - throws error b/c render is called from superclass", () => {
      const newShape = new Shape("blue", "TCG");
      const filePath = "./tmp/newShape.html";

      expect(() => newShape.writeToFile(filePath)).toThrow(
        "Call render() from a child class"
      );
    });
  });
});
