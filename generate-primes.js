const MIN= 2;
const primes = [];
const generatePrimes = (start, range)=>{
  let isPrime = true;
  let end = start + range;
  for (let i = start; i < end; i++) {
    for (let j = MIN; j < Math.sqrt(end); j++) {
      if (i !== j && i%j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
    isPrime = true;
  }
}

module.exports = {
  generatePrimes
}