import process from "node:process";

const parseArgs = () => {
  const arr = [];
  try {
    const allVariables = process.argv.slice(2);
    const formatArr = allVariables.map((str) => {
      if (str.startsWith('--')) {
        return str.slice(2)
      }
      return str
    })
    for (let i = 0; i < allVariables.length; i += 2) {
      arr.push(formatArr.slice(i, i + 2).join(' is '));
    }
    console.log(arr.join(', '));
  } catch {
    console.log("process operation failed");
  }
};

parseArgs();
