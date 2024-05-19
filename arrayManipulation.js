function processArray(arr) {
    // Create a new array to store the results
    const newArr = [];
  
    // Loop through each number in the input array
    for (let num of arr) {
      // Check if the number is even
      if (num % 2 === 0) {
        // Square the even number and add it to the new array
        newArr.push(num * num);
      } else {
        // Triple the odd number and add it to the new array
        newArr.push(num * 3);
      }
    }
  
    // Return the new array with modified values
    return newArr;
  }
  
  function formatArrayStrings(strArr, numArr) {
    // Input validation: Check if arrays have the same length
    if (strArr.length !== numArr.length) {
      throw new Error("Input arrays must have the same length");
    }
  
    // Create a new array to store formatted strings
    const formattedArr = [];
  
    // Loop through strings and corresponding numbers
    for (let i = 0; i < strArr.length; i++) {
      const str = strArr[i];
      const num = numArr[i];
  
      // Modify string based on number
      if (num % 2 === 0) {
        formattedArr.push(str.toUpperCase());
      } else {
        formattedArr.push(str.toLowerCase());
      }
    }
  
    // Return the new array with formatted strings
    return formattedArr;
  }
  
  // Example usage
  const arr = [1, 2, 3, 4, 5];
  const strArr = ["Hi", "my", "name", "is", "manasseh"];
  const result = processArray(arr);
  const formattedStrings = formatArrayStrings(strArr, result);
  console.log(formattedStrings); 
  