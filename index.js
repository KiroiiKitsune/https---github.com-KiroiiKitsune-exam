
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


// задание 3


function nearestSq(n){
  return Math.round(Math.sqrt(n))**2;
  }


console.log(nearestSq(115)); // выводит 121
console.log(nearestSq(144)); // выводит 144
console.log(nearestSq(80)); // выводит 81


// задание 4

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("world"));
console.log(reverseString("Привет"));

// 5 задание 

function addWordLength(str) {
  let arr = str.split(" ");
  let result = []; // 
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + " " + arr[i].length);
  }
  return result;
}

console.log(addWordLength("apple ban")); 
console.log(addWordLength("you will win"));

//   2 вариант

function addLength(str){
  return str.split(" ").map(function(word){
  return word + " " + word.length;
  });
  }



console.log(addLength("apple ban")); 
console.log(addLength("you will win"));

// задание 6 

function mango(quantity, price){ 
  let freeMango = Math.floor(quantity/3); 
return (quantity - freeMango) * price; 
}
console.log(mango(5, 3))


//  7 задание 

function litres(time) {
  return Math.floor(time * 0.5)
};
console.log(litres(3));

// задание 8 

function invert(array) {
  return array.map(num => num === 0 ? 0 : -num);   // используем метод map для обхода всех элементов массива и получения их аддитивной инверсии // Условие "num === 0 ? 0" нужно для того, чтобы 0 не превратился в -0
}

console.log(invert([1, 2, 3, 4, 5]));

function powersOfTwo(n){
  let result = []; 
  for (let i = 0; i <= n; i++){ 
      result.push(Math.pow(2,i)); 
  } return result; 
}console.log(powersOfTwo(4))


// 10 задание 

function grow(x){ 
  let result = 1; 
  for (let i = 0; i < x.length; i++){ 
     result *= x[i];
  }  return result; 
}

console.log(grow([1, 2, 3, 4]))

// 2 вариант

function grow(x){ 
  return x.reduce((acc, curr) => acc * curr); 
}

console.log(grow([1, 2, 3, 4]))


