const { Square, Shape } = require("../lib/shapes");
const fs = require("fs");

describe("Shapes", () => {
  describe("Shape", () => {
    it("constructor(width,height, fillColor)", () => {
      const newShape = new Shape(5, 5, "red");
      const expectedData =
        "width: 5, height: 5, fillColor: red, xmlns: http://www.w3.org/2000/svg";
      expect(newShape.getData()).toEqual(expectedData);
    });

    it("getData()", () => {
      const newShape = new Shape(50, 50, "blue");
      const expectedData =
        "width: 50, height: 50, fillColor: blue, xmlns: http://www.w3.org/2000/svg";
      expect(newShape.getData()).toEqual(expectedData);
    });

    it("render()", () => {
      const newShape = new Shape(50, 50, "blue");
      expect(() => newShape.render()).toThrow(
        "Call render() from a child class"
      );
    });

    it("renderSVGContainer()", () => {
      const newShape = new Shape(50, 50, "blue");
      const expectedResult = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">foo</svg>`;
      expect(newShape.renderSVGContainer("foo")).toEqual(expectedResult);
    });
  });
  // it("writeToFile() - file exists", () => {
  //   const newShape = new Shape(50, 50, "blue");
  //   const filePath = "./tmp/newShape.html";
  //   newShape.writeToFile(filePath);
  //   expect(fs.existsSync(filePath));
  // });

  // it("writeToFile() - file contents written", () => {
  //   const newShape = new Shape(50, 50, "blue");
  //   const filePath = "./tmp/newShape.html";
  //   const fileContents = newShape.getData();
  //   newShape.writeToFile(filePath);
  //   const content = fs.readFileSync(filePath, "utf8");
  //   expect(content).toEqual(fileContents);
  // });

  it("writeToFile() - throws error when called from superclass", () => {
    const newShape = new Shape(50, 50, "blue");
    const filePath = "./tmp/newShape.html";

    expect(() => newShape.writeToFile(filePath)).toThrow();
  });
});

// describe('suite', () => {
//     describe('class', () => {
//         it('method/test', ()=> {

//         });
//     });
// });
