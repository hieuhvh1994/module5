let fibonacci: number[] = [0, 1];

function listFibonacci(num: number) {
    for (let i: number = 2; i < num; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
}

let sum=0;
console.log(listFibonacci(10));

for (let num of listFibonacci(10)) {
    sum += num;
}
console.log(sum);