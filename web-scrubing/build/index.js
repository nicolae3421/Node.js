"use strict";

var _jsdom = require("jsdom");

var _fs = _interopRequireDefault(require("fs"));

var _https = _interopRequireDefault(require("https"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var html_code = '';

_https["default"].get('https://vanar.md', function (res) {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);
  res.on('data', function (d) {
    html_code += d;
  });
  res.on('end', function () {
    console.log(html_code);
    var document = new _jsdom.JSDOM(html_code.toString(), {
      url: "https://vanar.md"
    }).window.document;
    console.log(document.title);
  });
}).on('error', function (e) {
  console.error(e);
});