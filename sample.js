/**
 * This function adds two numbers
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number} 
 */
const add  = (a,b) =>{
    return a + b
}

/**
 * This Function substracts b from a
 * @param {Number} a 
 * @param {Number} b 
 * @return {Number} c
 */
const sub  = (a,b) =>{
    return a - b
}

/**
 * Simple recursive function to calculate the fibonacci number
 * @param {Number} num specify the desired fib number
 * @returns {Number} fib(num)
 */
const fib = (num) => {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }

  const spreadSomeLove = (s) =>{
    return s.replace(/like/g,'love'); //"I love Javascript"
}