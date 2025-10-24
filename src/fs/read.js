import fs from "fs/promises";

const read = async () => {
  try {
    const data = await fs.readFile("src/fs/files/fileToRead.txt", "utf8");
    console.log(data);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
