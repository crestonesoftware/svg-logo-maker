const { Square, Shape } = require("../lib/shapes");

describe("Shapes", () => {
  describe("Shape", () => {
    it("constructor(width,height, fillColor)", () => {
      let newShape = new Shape(5, 5, "red");
      const expectedData =
        "width: 5, height: 5, fillColor: red, xmlns: http://www.w3.org/2000/svg";
      console.log(newShape.getData());
      expect(newShape.getData()).toEqual(expectedData);
    });
    it("getData()", () => {
      let newShape = new Shape(50, 50, "blue");
      const expectedData =
        "width: 50, height: 50, fillColor: blue, xmlns: http://www.w3.org/2000/svg";
      expect(newShape.getData()).toEqual(expectedData);
    });
    it("render()", () => {
      let newShape = new Shape(50, 50, "blue");
      expect(() => newShape.render()).toThrow(
        "Call render() from a child class"
      );
    });
  });
});

// describe('suite', () => {
//     describe('class', () => {
//         it('method/test', ()=> {

//         });
//     });
// });

// describe('BlogPost', () => {
//   // Test to verify that the BlogPost class can be instantiated.
//   describe('Instantiate', () => {
//     it('should be an instance of BlogPost class', () => {
//       const blogpost = new BlogPost();

//       expect(blogpost).toBeInstanceOf(BlogPost);
//     });
//   });
