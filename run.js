var fs = require("fs");
var path = require("path");
var spawn = require('child_process').spawn;

var testCasePath = path.join(__dirname, "testcases");
var testCases = fs.readdirSync(testCasePath);

function cin(content) {

}
function cout(content) {
	process.stdout.write(content);
}
function readFileContent(file) {
  return fs.readFileSync(file, {encoding: "utf8"});
}
function readFileBuffer(file) {
  return fs.readFileSync(file);
}
if (testCases.length) {
  testCases.forEach((file) => {
    // var content = readFileContent(path.join(testCasePath, file));
    var buffer = readFileBuffer(path.join(testCasePath, file));
    var output = "";
    const run = spawn('node', ['run.js']);
    run.stdout.on('data', (data) => {
	    output += data;
	});
	run.stdout.on('end', () => {
	    console.log(output);
	});
	run.stdin.write(buffer);
	run.stdin.end();
  });
}
