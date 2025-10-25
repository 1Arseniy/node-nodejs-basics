import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import fs from "fs";
import { unlink } from "fs/promises";

const compress = async () => {
  const gzib = createGzip();
  const readStream = fs.createReadStream("src/zip/files/fileToCompress.txt");
  const writeStream = fs.createWriteStream("src/zip/files/archive.gz");
  try {
    await pipeline(readStream, gzib, writeStream);
    await unlink("src/zip/files/fileToCompress.txt");
  } catch {
    console.log("compress operation failed");
  }
};

await compress();
