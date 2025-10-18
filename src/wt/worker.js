import { Worker, isMainThread, workerData } from "node:worker_threads";
import { parentPort } from "worker_threads";
import { fileURLToPath } from "node:url";

// n should be received from main thread
const __filename = fileURLToPath(import.meta.url);
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // parentPort.on('message')
  if (!isMainThread) {
    // parentPort.on("message", () => {
    const result = nthFibonacci(workerData);
    parentPort.postMessage(result);
    // });
  }
};

sendResult();
