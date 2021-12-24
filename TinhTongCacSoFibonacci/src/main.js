var fibonacci = [0, 1];
function listFibonacci(num) {
    for (var i = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
}
var sum = 0;
console.log(listFibonacci(10));
for (var _i = 0, _a = listFibonacci(10); _i < _a.length; _i++) {
    var num = _a[_i];
    sum += num;
}
console.log(sum);
