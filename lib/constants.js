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
    xCenter: 100,
    yCenter: 100,
    radius: 100,
  },
  TRIANGLE: {
    xOrigin: 0,
    yOrigin: 0,
    width: 200,
    height: 250,
  },
  TEXT: {
    xOriginBase: 45,
    yOrigin: 145,
    fontSize: 60,
  },
};
const SVG_HEIGHT = 200;
const SVG_WIDTH = 300;
const SVG_CONTAINER = {
  height: SVG_HEIGHT,
  width: SVG_WIDTH,
  open_tags: `${HTML_WRAPPER.open_tags}<svg width="${SVG_WIDTH}" height="${SVG_HEIGHT}" overflow="visible" xmlns="http://www.w3.org/2000/svg">
      `,
  close_tags: `
      </svg>${HTML_WRAPPER.close_tags}`,
};

const OUTPUT_DIR = "./tmp";
const LOGO_FILE = {
  square: `${OUTPUT_DIR}/squareLogo.svg`,
  circle: `${OUTPUT_DIR}/circleLogo.svg`,
  triangle: `${OUTPUT_DIR}/triangleLogo.svg`,
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
