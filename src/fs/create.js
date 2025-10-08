import fs from "node:fs";

const create = async () => {
  fs.writeFile(
    "src/fs/files/fresh.txt",
    "I am fresh and young",
    "utf8",
    (err) => {
      if (err) {
        throw new Error("Error");
      }
    }
  );
  try {
    const exists = fs.existsSync("src/fs/files/fresh.txt");
    if (exists) {
      console.log("FS operation failed");
    }
  } catch (err) {
    console.log(err);
  }
};

await create();
