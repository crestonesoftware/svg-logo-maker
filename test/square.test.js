const { Square, Shape } = require("../lib/shapes");
const fs = require("fs");

describe("Shapes", () => {
  describe("Square", () => {
    // tests constructor
    it("constructor(x,y, width,height, fillColor)", () => {
      const newSquare = new Square(50, 50, 100, 100, "green");
      const expectedData =
        "x: 50, y: 50, width: 100, height: 100, fillColor: green, xmlns: http://www.w3.org/2000/svg";
      expect(newSquare.getData()).toEqual(expectedData);
    });

    // tests getData(). Is a copy of the constrctor test.
    // The duplication seems a little silly, but I'm just
    // iterating through a list of things to test!
    it("getData()", () => {
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
      const expectedData = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="100" height="100" fill="green" /></svg>`;
      expect(newSquare.renderInContainer()).toEqual(expectedData);
    });

    // // it("writeToFile() - file exists", () => {
    // //   const newShape = new Shape(50, 50, "blue");
    // //   const filePath = "./tmp/newShape.html";
    // //   newShape.writeToFile(filePath);
    // //   expect(fs.existsSync(filePath));
    // // });

    // // it("writeToFile() - file contents written", () => {
    // //   const newShape = new Shape(50, 50, "blue");
    // //   const filePath = "./tmp/newShape.html";
    // //   const fileContents = newShape.getData();
    // //   newShape.writeToFile(filePath);
    // //   const content = fs.readFileSync(filePath, "utf8");
    // //   expect(content).toEqual(fileContents);
    // // });

    // it("writeToFile() - throws error when called from superclass", () => {
    //   const newShape = new Shape(50, 50, "blue");
    //   const filePath = "./tmp/newShape.html";

    //   expect(() => newShape.writeToFile(filePath)).toThrow();
    // });
  });
});

// describe('suite', () => {
//     describe('class', () => {
//         it('method/test', ()=> {

//         });
//     });
// });
