// enumerated values common to multiple files
const SVG_CONTAINER = {
  width: 300,
  height: 200,
};

const HTML_WRAPPER = {
  open_tags: "<html><body>",
  close_tags: "<p></p></body></html>",
};

const LOGO_FILE = "./tmp/logo.svg";
//const MAGIC_SUFFIX = ("\n\nThe logo mysteriously fails to appear in my browser when the svg tag is the only contents of this file. With the addition of this magic suffix, or anything else, voila! the logo appears.");

module.exports = { SVG_CONTAINER, LOGO_FILE, HTML_WRAPPER };
