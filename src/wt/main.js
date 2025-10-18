import { Worker, workerData, parentPort, isMainThread } from "worker_threads";
import { fileURLToPath } from "node:url";
import os from "os";

const __filename = fileURLToPath(import.meta.url);

const performCalculations = async () => {
  // console.log(workerData);
  if (isMainThread) {
    let number = 10;
    for (let i = 0; i < os.cpus().length; i++) {
      number++;
      const worker = new Worker(__filename, {
        workerData: number,
      });
      worker.on("message", (data) => console.log(data));
      worker.on("error", () => console.log("err"));
    }
  }
};

await performCalculations();
