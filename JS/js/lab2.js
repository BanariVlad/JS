let fibonacciNumbers = new Array();

const Fibonacci = (n) => {
  fibonacciNumbers[0] = 0;
  fibonacciNumbers[1] = 1;
  for (let i = 2; i < n; i++) {
    fibonacciNumbers[i] = fibonacciNumbers[i-1] + fibonacciNumbers[i-2];
  }
  return fibonacciNumbers;
}

const isFibonacci = (number, n) => {
  Fibonacci(n);
  let i = 0;
  let find = true;
  while (i < fibonacciNumbers.length && find) {
    if (number === fibonacciNumbers[i]) {
      find = false;
    }
    i++;
  }
  if (find === false) {
    return alert('It is a Fibonacci number');
  } else {
    return alert('Nnn...Not a Fibonacci number');
  }
}

const intervalFibonacci = (min, max) => {
  let interval = new Array();
  let intervalFibonacci = new Array();
  let intervalFibonacciPrime = new Array();
  // Interval to array
  for ( let i = min; i <= max; i++) {
    interval.push(i);
  }
  // All Fibonacci numbers from interval
  interval.forEach(index => {
    if (interval.includes(index) === fibonacciNumbers.includes(index)) {
      intervalFibonacci.push(index);
    }
  });
  //All Fibonacci Prime numbers from interval
  interval.forEach(index => {
    if (perfectNumber(index)) {
      intervalFibonacciPrime.push(index);
    }
  });
  return intervalFibonacci;
}

const perfectNumber = (n) => {
  let divisors = new Array();
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return (divisors.length === 2 ? true : false)
}



