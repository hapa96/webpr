const inc = () => 1;
const double = x => x * 3;

Function.prototype.then = () => {
  const composition = () => console.log("Hello");
  return composition;
};

inc.then("Hello")