import process from "node:process";
import { Transform } from "node:stream";

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, _, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });
  try {
    process.stdin.pipe(reverse).pipe(process.stdout);
  } catch {
    console.log("transform operation failed");
  }
};

await transform();
