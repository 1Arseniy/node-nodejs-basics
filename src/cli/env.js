import process from "node:process";

const parseEnv = () => {
  const rssVariables = [];
  try {
    const allVariables = Object.keys(process.env);
    for (let i = 0; i < allVariables.length; i++) {
      if (allVariables[i].startsWith("RSS_")) {
        rssVariables.push(`${allVariables[i]}=${process.env[allVariables[i]]}`);
      }
    }
  } catch {
    console.log("process operation failed");
  }
  console.log(rssVariables.join("; "));
};

parseEnv();
