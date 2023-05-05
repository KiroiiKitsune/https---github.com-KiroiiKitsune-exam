
// задание 1 

function strCount(str, letter){  
    const arr = str.split('');
    const result = arr.filter(item =>(item == letter));
    return result.length
  }
console.log(strCount('iphone', 'p'))

// 2 задание

// 1 вариант 

function squareSum(numbers){ 
  let sum = 0; 
  for (let i = 0; i < numbers.length; i++)
  { sum += numbers[i]**2; 
} return sum; 
}

console.log(squareSum([1, 2, 2]))

// 2 вариант

function squareSum(numbers){
  return numbers.map(el => el **2).reduce((a, b) => a + b);
 }

// 3 вариант 
 function squareSum(numbers){

  const result = numbers.map(item =>item **2)
  const totalSum = result.reduce((a, b) => a + b);
  
  return totalSum
  }
  console.log(squareSum([1, 2, 2]));


