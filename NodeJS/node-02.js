const generateRandomID = () => {
  return crypto.randomUUID();
}

const randomID = generateRandomID();

console.log(randomID);