const functionA = async () => {
  return "name";
};

const functionB = async () => {
  return "branch";
};

const functionC = async () => {
  return "rollno";
};

const profile = async () => {
  const one = await functionA();
  console.log(one);
  const two = await functionB();
  console.log(two);
  const three = await functionC();
  console.log(three);
};

profile();
console.log("profile");
