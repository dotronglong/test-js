var {io} = require("../../utils");
io.readInputLines(main);

function main() {
    var n = parseInt(io.readLine());
    for (var i = n - 1; i >= 0; i--) {
        var str = "";
        for (var j = 0; j < n; j++) {
            if (j < i) {
                str += " ";
            } else {
                str += "#";
            }
        }
        console.log(str);
    }
}