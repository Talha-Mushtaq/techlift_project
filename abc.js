let number = 6;
let prime = true;
if (number === 1) {
  console.log("Not prime number");
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }
  if (prime) console.log("prime number");
  else console.log("no prime number");
} else {
  console.log("Not prime number");
}
