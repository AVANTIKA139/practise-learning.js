const functionA = async () => {
  return "likes";
};

const functionB = async () => {
  return "post";
};

const functionC = async () => {
  return "comment";
};

const page = async () => {
  const one = await functionA();
  console.log(one);
  const two = await functionB();
  console.log(two);
  const three = await functionC();
  console.log(three);
};

page();
console.log("page");
