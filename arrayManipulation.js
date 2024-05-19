function processArray(arr) {

    const newArr = [];

    for (let num of arr) {

      if (num % 2 === 0) {
  
        newArr.push(num * num);
      } else {
      
        newArr.push(num * 3);
      }
    }
  

    return newArr;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const result = processArray(arr);
  console.log(result); 
  