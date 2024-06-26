const { Square, Shape } = require("./lib/shapes.js");

describe("Shapes", () => {
  describe("Shape", () => {
    it("render()", () => {
      let newShape = new Shape(5, 5, "red");
      console.log(newShape);
      expect(1 == 2);
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
