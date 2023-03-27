// synchronous function=> line by line (Normal coding)
const timetakingFunction = () => {
  return "hello i will take time";
};

const callingsyncFunction = () => {
  const name = timetakingFunction();
  //   this will take time
  console.log(name);
};

callingsyncFunction();
// this is not an optimized approach because, next line is dependent
console.log("After Time taking function");

console.log(".......................................");

// async way
// 1.use the keyword async before the time taking function declaration
// const timeTakingFunction = async () => {
//   return "hello i will take time";
// };
// const callingAsyncFunction = async () => {
//   const name = await timeTakingFunction();
//   console.log(name);
// };

// callingAsyncFunction();
// console.log("after time taking function");
