// enumerated values common to multiple files
const SVG_CONTAINER = {
  width: 200,
  height: 300,
};

const LOGO_FILE = "./tmp/logo.svg";
const MAGIC_SUFFIX =
  "The logo mysteriously fails to appear in my browser when the svg tag is the only contents of this file. With the addition of this magic suffix, or anything else, voila! the logo appears.";

module.exports = { SVG_CONTAINER, LOGO_FILE };
