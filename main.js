var fs = require("fs");
var path = require("path");
var spawn = require("child_process").spawn;
var assert = require("assert");

var test = process.argv[2] || null;
if (test === null) {
  console.log("[Usage] node main.js {test}");
} else {
  var fileRun = path.join(__dirname, test, "run.js");
  var folderTestCase = path.join(__dirname, test, "tests");
  fs.readdirSync(folderTestCase).forEach((fileName) => {
    if (fileName.match(/\.spec$/i)) {
      // do nothing
      return;
    }
    var fileTest = path.join(folderTestCase, fileName);
    var fileResult = path.join(folderTestCase, fileName + ".spec");
    var bufferTest = fs.readFileSync(fileTest);
    var bufferResult = fs.readFileSync(fileResult);
    
    var output = "";
    var runner = spawn("node", [fileRun]);
    runner.stdout.on("data", (data) => {
      output += data;
    });
    runner.stdout.on("end", () => {
      /* TODO: find out the exactly reason why it has additional length at the end of buffer */
      output = output.substr(0, output.length - 1);

      var expected = bufferResult.toString();
      var actual   = output.toString();
      try {
        assert.deepEqual(expected, actual);  
      } catch (e) {
        console.log(`[${test}#${fileName}] failed!`);
        console.log("==========EXPECTED===========");
        console.log(expected);
        console.log("===========ACTUAL============");
        console.log(actual);
        console.log("=============================");
        process.exit(1);
      }
    });
    runner.stdin.write(bufferTest);
    runner.stdin.end();
  });
  console.log(`[${test}] PASSED!`)
}