function fizzBuzz(start, end) {
    let Arr = [];
    let index = 0;
    for(let i = start; i<=end; i++){
        if(i%3===0&&i%5===0){
            Arr[index] = "FizzBuzz";
        }
        else if(i%3===0){
            Arr[index] = "Fizz";
        }
        else if (i%5===0){
            Arr[index] = "Buzz";
        }
        else{
            Arr[index] = i;
        }
        index++;
    }
    return Arr;
}

// Do not edit this line;
module.exports = fizzBuzz;