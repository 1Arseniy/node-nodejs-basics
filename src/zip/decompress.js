import { createUnzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import fs from "fs";
import { unlink } from "node:fs/promises";

const decompress = async () => {
  const unzip = createUnzip();
  const readStream = fs.createReadStream("src/zip/files/archive.gz");
  const writeStream = fs.createWriteStream("src/zip/files/fileToCompress.txt");
  try {
    await pipeline(readStream, unzip, writeStream);
    await unlink("src/zip/files/archive.gz");
  } catch {
    console.log("decompress operation failed");
  }
};

await decompress();
