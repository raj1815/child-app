const concat = require("concat");
(async function build() {
  const files = [
    "./dist/micro-angular/browser/polyfills.js",
    "./dist/micro-angular/browser/main.js",
  ];
  await concat(files, "./dist/micro-angular/browser/micro-angular.js");
})();