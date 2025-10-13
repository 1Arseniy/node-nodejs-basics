import fs from "fs";
import process from "node:process";

const write = async () => {
  try {
    const stream = fs.createWriteStream("src/streams/files/fileToWrite.txt");
    process.stdin.on("data", (chunk) => {
      stream.write(chunk);
    });
  } catch {
    console.log("write operation failed");
  }
};

await write();
