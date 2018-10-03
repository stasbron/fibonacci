const num = parseInt(prompt("enter a number"))

alert("loop method: " + fibLoop(num));
alert("recursion: " + fibRecursion(num));
alert("arrey: " + fibArrey(num));

function fibLoop(n) {

    let numA = 0;
    let numB = 1;
    let numC = 1;

    for (n = 2; n <= num; n++) {
        numC = numA + numB;
        numA = numB;
        numB = numC;
    }
    return numC;
}
;
function fibRecursion(n) {
    if (n <= 2) {
        return 1;
    }
    return fibRecursion(n - 1) + fibRecursion(n - 2);
}

function fibArrey(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}
