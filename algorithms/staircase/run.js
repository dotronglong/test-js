var input = "", lines = [], current = 0;
process.stdin.on('data', function (data) {
    input += data;
});
process.stdin.on('end', function () {
    lines = input.split("\n");
    main();
});
function readLine() {
    return lines[current++];
}
function main() {
    var n = parseInt(readLine());
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