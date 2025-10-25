import fs from "fs";
import { pipeline } from "node:stream/promises";
import process from "node:process";

const read = async () => {
  try {
    await pipeline(
      fs.createReadStream("src/streams/files/fileToRead.txt"),
      async function* (source) {
        for await (const chunk of source) {
          process.stdout.write(chunk);
        }
      }
    );
  } catch {
    console.log("read operation failed");
  }
};

await read();
