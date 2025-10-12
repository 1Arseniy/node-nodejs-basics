import { pipeline } from 'node:stream/promises';
import fs from 'fs'

const { createHmac } = await import('node:crypto');

const calculateHash = async () => {
  const secret = 'GfG';
  const hash = createHmac('sha256', secret)
  await pipeline(
    fs.createReadStream('src/hash/files/fileToCalculateHashFor.txt'), 
    async function* (source) {
      for await(const chunk of source) {
       hash.update(chunk)
      }
      const result = hash.digest('hex')
      console.log(result)
    }
  ).catch(() => console.log('calculateHash operation failed'))
};

await calculateHash();
