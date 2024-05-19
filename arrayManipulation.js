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
  
  function formatArrayStrings(strArr, numArr) {

    if (strArr.length !== numArr.length) {
      throw new Error("Input arrays must have the same length");
    }

    const formattedArr = [];
  

    for (let i = 0; i < strArr.length; i++) {
      const str = strArr[i];
      const num = numArr[i];
  
      if (num % 2 === 0) {
        formattedArr.push(str.toUpperCase());
      } else {
        formattedArr.push(str.toLowerCase());
      }
    }
  
   
    return formattedArr;
  }
  

  const arr = [1, 2, 3, 4, 5];
  const strArr = ["Hi", "my", "name", "is", "manasseh"];
  const result = processArray(arr);
  const formattedStrings = formatArrayStrings(strArr, result);
  console.log(formattedStrings); 
  