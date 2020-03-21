const AppContext = null;

const animals = ["Turtle"];
const descriptions = ["Aspiring"];

function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function generateUserName() {
  // 2x random 0 - length des jeweiligen Arrays
  const aIndex = getRandomArbitrary(0, animals.length);
  const dIndex = getRandomArbitrary(0, descriptions.length);
  return `${descriptions[dIndex]} ${animals[aIndex]}`;
}

export default AppContext;
export { generateUserName };
