import { Worker, isMainThread } from "worker_threads";
import { fileURLToPath } from "node:url";
import os from "os";


const __filename = fileURLToPath(import.meta.url);

const performCalculations = async () => {
 
  if (isMainThread) {
    const results = []
    let number = 10;
    let counter = 0
    const cpusLength = os.cpus().length
    for (let i = 0; i < cpusLength; i++) {
      const worker = new Worker(__filename)
      worker.postMessage(number)

      number++;
      worker.on("message", (data) => {
        results.push({status: 'resolved', data: data})
        counter++
        if (counter === cpusLength) {
          console.log(results.sort((a, b) => a.data - b.data))
        }
      });
      worker.on("error", () => {
       results.push({status: 'error', data: null})
       if (counter === cpusLength) { 
        console.log(results)
       }
      });
    }
  } 
}

await performCalculations();
