const deleteComments = string => {
  const pattern = /(?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(\/\/.+)/gim;
  return string.replace(pattern, "");
};

// console.log(parsingComments("asdasda /** * Run the database seeds.** @return void*/"));
export default deleteComments;
