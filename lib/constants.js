// enumerated values common to multiple files
const HTML_WRAPPER = {
  open_tags: `<html>
    <body>
      `,
  close_tags: `
      <p></p>
    </body>
</html>`,
};

const SHAPE = {
  SQUARE: {
    xOrigin: 0,
    yOrigin: 0,
    width: 200,
    height: 250,
  },
  CIRCLE: {
    xOrigin: 0,
    yOrigin: 0,
    width: 200,
    height: 250,
  },
  TRIANGLE: {
    xOrigin: 0,
    yOrigin: 0,
    width: 200,
    height: 250,
  },
};

const SVG_CONTAINER = {
  height: 200,
  width: 300,
  open_tags: `${HTML_WRAPPER.open_tags}<svg width="300" height="200" overflow="visible" xmlns="http://www.w3.org/2000/svg">
        `,
  close_tags: `
      </svg>${HTML_WRAPPER.close_tags}`,
};

const LOGO_FILE = {
  directory: "./tmp",
  square: `${this.directory}/squareLogo.svg`,
  circle: `${this.directory}/circleLogo.svg`,
  triangle: `${this.directory}/triangleLogo.svg`,
  triangleLogoFile: function () {
    return `${this.directory}/triangle-logo.svg`;
  },
  squareLogoFile: function () {
    return `${this.directory}/square-logo.svg`;
  },
};

const myObject = {
  directoryPath: "./tmp", // Replace with your actual directory path
};

module.exports = { SVG_CONTAINER, LOGO_FILE, SHAPE };

{
  /* <html>
  <body>
    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="200" height="250" fill="teal" />
    </svg>
    <p></p>
  </body>
</html>; */
}
