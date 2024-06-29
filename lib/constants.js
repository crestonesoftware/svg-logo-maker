// enumerated values common to multiple files
const HTML_WRAPPER = {
  open_tags: "<html><body>",
  close_tags: "<p></p></body></html>",
};

const SVG_CONTAINER = {
  width: 300,
  height: 200,
  open_tags: `${HTML_WRAPPER.open_tags}<svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg">`,
  close_tags: `</svg>${HTML_WRAPPER.close_tags}`,
};

const LOGO_FILE = "./tmp/logo.svg";
//const MAGIC_SUFFIX = ("\n\nThe logo mysteriously fails to appear in my browser when the svg tag is the only contents of this file. With the addition of this magic suffix, or anything else, voila! the logo appears.");

module.exports = { SVG_CONTAINER, LOGO_FILE };


{/* <html>
  <body>
    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="200" height="250" fill="teal" />
    </svg>
    <p></p>
  </body>
</html>; */}