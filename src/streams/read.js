import fs from "fs";

const read = async () => {
  try {
    const stream = fs.createReadStream("src/streams/files/fileToRead.txt");
    stream.on('data', (chunk) => {
     console.log(chunk.toString())
    })
  } catch {
    console.log("read operation failed");
  }
};

await read();
