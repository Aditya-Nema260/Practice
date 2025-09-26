

for(let i = 1; i<=20; i++){
    if(i % 3 == 0 && i % 5 ==0){
        console.log(i + " FizzBuzz");
    }else if(i % 3 == 0 ){
        console.log(i  + " Fizz");
    }else if(i % 5 ==0){
        console.log(i + " Buzz");
    }
}

let num = 5

for(let i = 1; i<=10; i++){
    console.log(`${num} X ${i} = ${num * i} `);
}