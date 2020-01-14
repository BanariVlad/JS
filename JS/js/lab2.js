let fibonacciNumbers = new Array();

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('resolve').addEventListener('click', resolve);
})

const resolve = () => {
  const number = document.getElementById('number').value;
  const n = document.getElementById('n').value;
  const intervalMin = document.getElementById('intervalMin').value;
  const intervalMax = document.getElementById('intervalMax').value;
  Fibonacci(n);
  const intervalArrays = intervalFibonacci(intervalMin, intervalMax);
  document.querySelector('.results').style.display = 'block';
  document.getElementById('fibonacci').value = fibonacciNumbers;
  document.getElementById('checkFibonacci').value = isFibonacci(number, n);
  document.getElementById('intervalFibonacci').value = intervalArrays[0];
  document.getElementById('primeFibonacci').value = intervalArrays[1];
  clear();
}

const Fibonacci = (n) => {
  fibonacciNumbers[0] = 0;
  fibonacciNumbers[1] = 1;
  for (let i = 2; i < n; i++) {
    fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
  }
  return fibonacciNumbers;
}

const isFibonacci = (number) => {
  let i = 0;
  let find = true;
  while (i < fibonacciNumbers.length && find) {
    if (number == fibonacciNumbers[i]) {
      find = false;
    }
    i++;
  }
  if (find === false) {
    return 'It is a Fibonacci number';
  } else {
    return 'Nnn...Not a Fibonacci number';
  }
}

const intervalFibonacci = (min, max) => {
  let interval = new Array();
  let intervalFibonacci = new Array();
  let intervalFibonacciPrime = new Array();
  // Interval to array
  for (let i = min; i <= max; i++) {
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
    if (isPerfectNumber(index) && interval.includes(index) === fibonacciNumbers.includes(index)) {
      intervalFibonacciPrime.push(index);
    }
  });
  return [intervalFibonacci, intervalFibonacciPrime];
}

const isPerfectNumber = (n) => {
  let divisors = new Array();
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return (divisors.length === 2 ? true : false);
}

const clear = () => {
  fibonacciNumbers = [];
  document.getElementById('number').value = '';
  document.getElementById('n').value = '';
  document.getElementById('intervalMin').value = '';
  document.getElementById('intervalMax').value = '';
}
