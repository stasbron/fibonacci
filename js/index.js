const num = parseInt(prompt("enter a number"))

alert("loop method: "+ fibLoop(num));
alert("recursion: "+ fibRecursion(num));
alert("arrey: "+ fibArrey(num));




function fibLoop(n) {

    let num1 = 0;
    let num2 = 1; 
    let num3 = 1;

    for( n = 2; n <= num; n++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
    return num3;
};


function fibRecursion(n) {
  if (n <= 2){
    return 1;
  } 
  return fibRecursion(n - 1) + fibRecursion(n - 2);
}



function fibArrey(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1]);
  }
 return arr[n];
}





