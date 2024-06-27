const { Square, Shape } = require("../lib/shapes");
//const { MAGIC_SUFFIX } = require("../lib/constants.js");
const fs = require("fs");

describe("Shapes", () => {
  describe("Shape", () => {
    it("constructor and getData()", () => {
      const newShape = new Shape("red", "TCG");
      const expectedData =
        "container width: 300, container height: 200, fillColor: red, xmlns: http://www.w3.org/2000/svg";
      expect(newShape.getData()).toEqual(expectedData);
    });

    it("render()", () => {
      const newShape = new Shape("blue", "TCG");
      expect(() => newShape.render()).toThrow(
        "Call render() from a child class"
      );
    });

    it("renderSVGContainer()", () => {
      const newShape = new Shape("blue", "TCG");
      const expectedResult = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">foo</svg>`;
      expect(newShape.renderSVGContainer("foo")).toEqual(expectedResult);
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
