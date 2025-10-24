let number = Math.floor(Math.random() * 15) + 1;

for(let i = number; i > 0; i++);
    if(i % 3 === 0) {
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    } else if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }