var io = require("../../utils").io;
io.readInputLines(main);

function main() {
	var t = parseInt(io.readLine());
	for (var r = 0; r < t; r++) {
		var args = io.readLine().split(" ");
		var n = parseInt(args[0]),
    		k = parseInt(args[1]);
    	var a = io.readLine().split(" ").map(Number);
	}
}