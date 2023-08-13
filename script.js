// A function that takes two numbers and returns their sum.
function addNumbers(a, b) {
  let sum = a + b;
  return sum;
}
console.log(addNumbers(5, 7));

// A function that calculates the average of an array of numbers.
function calculateArrayAverage(arr) {
  let sum = 0;
  let avg = 0;
  for (const num of arr) {
    sum += num;
  }
  avg = Math.round(sum / arr.length);
  return avg;
}
console.log(calculateArrayAverage([1, 4, 8, 23, 567, -2]));

// A function that checks if a number is even.
function isEvenNumber(num) {
  if (num % 2 === 0) {
    return `The number ${num} is even`;
  }
  return `The number ${num} is odd`;
}
console.log(isEvenNumber(5));

// A function that determines if a number is prime.
function isPrimeNumber(num) {
  if (num <= 1) {
    return `The number ${num} is not prime`;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return `The number ${num} is not prime`;
    }
  }
  return `The number ${num} is prime`;
}
console.log(isPrimeNumber(251));

// A function to format the date in a human-readable form.
function formatDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let formattedDate = `${months[month]} ${day}, ${year}`;
  return formattedDate;
}
console.log(formatDate(new Date()));

// A function that takes a string and returns it with the first letter capitalized.
function capitalizeString(str) {
  let strArr = str.split("");
  let firstLetter = strArr[0].toUpperCase();
  strArr[0] = firstLetter;
  let string = strArr.join("");
  return string;
}
console.log(capitalizeString("qwertyu"));

// A function that reverses the order of elements in an array.
function reverseArray(array) {
  let reversedArray = [];
  for (let index = array.length - 1; index >= 0; index--) {
    reversedArray.push(array[index]);
  }
  return reversedArray;
}
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));

// A function that generates a random number within a given range.
function generateRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(generateRandomNumberInRange(5, 68));

// A function that converts a string to upper case.
function toUpperCaseString(str) {
  let upperCaseArray = [];
  let strArray = str.split("");
  for (const char of strArray) {
    upperCaseArray.push(char.toUpperCase());
  }
  let upperString = upperCaseArray.join("");
  return upperString;
}
console.log(toUpperCaseString("asdfghjkl"));

// A function that converts a string to lower case.
function toLowerCaseString(str) {
  let lowerCaseArray = [];
  let strArray = str.split("");
  for (const char of strArray) {
    lowerCaseArray.push(char.toLowerCase());
  }
  let lowerString = lowerCaseArray.join("");
  return lowerString;
}
console.log(toLowerCaseString("zxcDFGHvbn"));

// A function that checks if a string is a valid email address.
function isValidEmail(email) {
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    return false;
  }
  const atIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");

  if (atIndex > dotIndex) {
    return false;
  }

  if (dotIndex - atIndex === 1) {
    return false;
  }

  return true;
}
console.log(isValidEmail("example@email.com"));
console.log(isValidEmail("invalid-email"));

// A function that finds the largest value from an array of numbers.
function findMaxValueFromArray(arr) {
  let max = arr[0];
  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(findMaxValueFromArray([1, 4, 8, 2, 5, 8, 234, 0]));

// A function that finds the smallest value from an array of numbers.
function findMinValueFromArray(arr) {
  let min = arr[0];
  for (const num of arr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}
console.log(findMinValueFromArray([1, 4, 8, 2, 5, 8, 234, 0]));

// A function that calculates the area of a geometric figure.
function calculateGeometricShapeArea(width, height) {
  return width * height;
}
console.log(calculateGeometricShapeArea(10, 23));

// A function to convert temperature from Celsius to Fahrenheit.
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log(convertCelsiusToFahrenheit(20));

// Function to convert temperature from Fahrenheit to Celsius.
function convertFahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log(convertFahrenheitToCelsius(50));

// A function that calculates the factorial of a number.
function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }

  return result;
}
console.log(calculateFactorial(10));

// A function that calculates the distance between two points in space.
function calculateDistanceBetweenPoints(x1, y1, z1, x2, y2, z2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dz = z2 - z1;

  const distance = Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
  return distance;
}
console.log(calculateDistanceBetweenPoints(3, 4, 5, 6, 7, 8));

// A function that formats a number as a monetary amount in the desired currency.
function formatCurrency(amount) {
   const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD', });
  return formatter.format(amount);
}
console.log(formatCurrency(123.45));

// A function that returns the length of a string.
function getStringLength(str) {
  return str.length;
}
console.log(getStringLength("qwertyuiop"));
