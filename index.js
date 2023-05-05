
// задание 1 

function strCount(str, letter){  
    const arr = str.split('');
    const result = arr.filter(item =>(item == letter));
    return result.length
  }
console.log(strCount('iphone', 'p'))

