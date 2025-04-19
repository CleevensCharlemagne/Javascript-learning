function estPremier(n) {
  if (n <= 1) {
    return false;
  } else if (n === 2 || n === 3) {
    return true;
  } else if (n % 3 === 0 || n % 2 === 0) {
    return false;
  } else {
    for (let i = 5; i <= Math.floor(Math.sqrt(n)); i = i + 2) {
      if (n % i === 0) {
        return false;
      }
    }
  }
  return true;
}

console.log(estPremier(0)); // false
console.log(estPremier(1)); // false
console.log(estPremier(2)); //true
console.log(estPremier(3)); //true
console.log(estPremier(4)); // false
console.log(estPremier(5)); //true
console.log(estPremier(11)); //true
console.log(estPremier(18)); // false
console.log(estPremier(37)); //true