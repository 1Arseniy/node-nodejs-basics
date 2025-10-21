import { Worker } from "worker_threads";
import { URL } from "node:url";
import os from "os";

const performCalculations = async () => {
  const cpusLength = os.cpus().length;
  const results = [];
  let number = 10;
  let counter = 0;
  for (let i = 0; i < cpusLength; i++) {
    const worker = new Worker(new URL("./worker.js", import.meta.url));
    worker.postMessage(number);

    number++;
    worker.on("message", (data) => {
      results.push({ status: "resolved", data: data });
      counter++;
      if (counter === cpusLength) {
        console.log(results.sort((a, b) => a.data - b.data));
      }
    });
    worker.on("error", () => {
      results.push({ status: "error", data: null });
      if (counter === cpusLength) {
        console.log(results);
      }
    });
  }
};

await performCalculations();
