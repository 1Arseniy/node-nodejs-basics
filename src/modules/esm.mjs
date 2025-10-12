import { sep } from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname } from 'path'
import aJSON from './files/a.json' with  {type: 'json'}
import bJSON from './files/b.json' with  {type: 'json'}

import './files/c.cjs';

const __filename = fileURLToPath(import.meta.url)
const __dirname =  dirname(__filename)

const random = Math.random();

const unknownObject = random > 0.5 ? aJSON : bJSON;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export default {
  unknownObject,
  myServer,
};
