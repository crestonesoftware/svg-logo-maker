const { Square, Shape } = require("./lib/shapes.js");

describe("suite", () => {
  describe("class", () => {
    it("method/test", () => {});
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


let newShape = new Square(5, 5, 5, 5, "red");
console.log(newShape);
