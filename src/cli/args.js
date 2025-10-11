import process from "node:process";

const parseArgs = () => {
  const arr = [];
  try {
    const allVariables = process.argv.slice(2);
    // console.log(variables.);
    for (let i = 0; i < allVariables.length; i += 2) {
      // if (allVariables[i].startsWith("--")) {
      //   const a = allVariables[i].slice(2);
      //   console.log(a);
      // }
      arr.push(allVariables.slice(i, i + 2));
      // const format = allVariables[i].
      // if (i % 2 !== 0) {
      // const formatKeys = allVariables
      // arr.push(
      //   allVariables.
      //   // .join(" is ")
      // );
      // }
    }
  } catch {
    console.log("process operation failed");
  }
  console.log(arr);
};

parseArgs();
