var io = {
	lines: [],
	current: 0
};
io.readInput = function(callback) {
	var input = "";
	process.stdin.on("data", function (data) {
	    input += data;
	});
	process.stdin.on("end", function () {
	    callback(input);
	});
};

io.readInputLines = function(callback) {
	var self = this;
	self.readInput(function(input) {
		self.lines = input.split("\n");
		callback(self.lines);
	});
};


io.readLine = function() {
	return this.lines[this.current++];
};

module.exports = {io};