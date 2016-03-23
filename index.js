module.exports = leftpad;

function leftpad (str, len, ch) {
  var padding = "";

  var i = -1;

  if (!ch && ch !== 0) ch = ' ';

  len = len - str.length;

  while (++i < len) {
    padding += ch;
  }

  return padding + str;
}
