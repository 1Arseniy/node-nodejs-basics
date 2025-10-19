
import child_process from 'child_process';
import process from 'process';

const spawnChildProcess = async (args) => {
  const child =  child_process.fork('src/cp/files/script.js', args)
   child.on('close', (code) => {
    console.log(code)
  })
};

spawnChildProcess( ['1', '2']);
