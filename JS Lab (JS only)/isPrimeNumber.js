const negative = /\-/g;

function isUnnaturalPrime(n) {
  n = String(n).replace(negative, "");
  n = Number(n);
  let hasZero = 0;
  const root = Math.floor(Math.sqrt(n));
  if (n === 1 || n === 0) return false;

  for (let i = 2; i < root; i++) {
    hasZero = n % i;
    if (!hasZero) return false;
  }
  return true;
}

console.log(isUnnaturalPrime(-44));

// Let's test if 29 is prime.
// The square root of 29 is approximately 5.38.
// Divide 29 by 2, 3, 4, and 5.
// None of these divisions result in a whole number.
// Therefore, 29 is a prime number.
