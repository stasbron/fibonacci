const num = parseInt(prompt("enter a number"))

alert("loop method: "+ fibloop(num));
alert("recursion: "+ fibrecursion(num));
alert("arrey: "+ fibarrey(num));


function fibloop(n) {

    let a = 0;
    let b = 1; 
    let c = 1;

    for( n = 2; n <= num; n++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};


function fibrecursion(n) {
  if (n <= 2) return 1;
  return fibrecursion(n - 1) + fibrecursion(n - 2);
}



function fibarrey(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1]);
  }
 return arr[n];
}



