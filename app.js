// Exercise 1 Ignore Even
for (let i = 1; i <= 99; i+=2) {
        console.log(i);
    }

// Exercise 2 Fizzbuzz
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    let output = " ";
    if (i % 3 == 0) {
        output += "FIZZ";
    }
    if (i % 5 == 0){
        output += "BUZZ";
    }
    console.log(`${i} ${output}`);

    i++;
}

let x = 1;

//Exercise 3
do{
    let output = "";
    if (x % 3 == 0) {
        output += "FIZZ";
    }
    if (x % 5 == 0) {
        output += "BUZZ";
    }
    console.log(`${x} ${output}`);
    x++;
} while (x <= 100);

//Exercise 4 Find value
let numberToFind = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);

for (let i = 1; i <= n; i++) {
    if (i == numberToFind){
    console.log(`Found the number${numberToFind}`);
    break;
    }
if (i == n){
console.log(`Did not find ${numberToFind} within 1-${n}`)
    }
}

//Exercise 5 Customized FIZZBUZZ
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
let end = Math.round(Math.random() * (1000 - 1) + 1); 
let start = Math.round(Math.random() * (10 - 1) + 1); 

for (let i = start; i <= end; i++){
    let output = "";
    if (i % fizzDivisor == 0){
        output += "FIZZ";
    }
    if (i % buzzDivisor == 0){
        output += "BUZZ";
        }
    console.log(`${i} ${output}`);
}