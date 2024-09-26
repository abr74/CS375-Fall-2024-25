// ----------------------------------Q1-----------------------------------
function evenIdxPositiveSum (numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i+=2){
        if(numbers[i] > 0){
            sum += numbers[i];
        }
    }

    return sum;
}

const q1_result = evenIdxPositiveSum([-2, 3, 1, 24, -8, -9, 10]);
console.log(q1_result)
// ----------------------------------Q2------------------------------------
function filterer(list, functionName){
    const result = []
    for(index of list){
        if(functionName(index)){
            result.push(index);
        }
    }
    return result;
}

let isEven = x => x % 2 === 0;
console.log(filterer([1, 2, 3, 4, 5, 6], isEven));
// ----------------------------------Q3-------------------------------------
function builder(keys, values) {
    const result = {};
    for (let i = 0; i < keys.length; i++) {
        result[keys[i]] = values[i];
    }
    return result;
}

let keys = ["a", "b", "c"];
let values = [1, 2, 3];
console.log(builder(keys, values));
