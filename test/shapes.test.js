const { Square, Shape } = require("../lib/shapes");
const { HTML_WRAPPER, SVG_CONTAINER } = require("../lib/constants.js");
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
      const shape_placeholder = "foo";
      const expectedResult = `${SVG_CONTAINER.open_tags}${shape_placeholder}${SVG_CONTAINER.close_tags}`;
      expect(newShape.renderSVGContainer(shape_placeholder)).toEqual(
        expectedResult
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
