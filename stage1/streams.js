import fs from 'fs';


const readStream = fs.createReadStream('./text2.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream( './text42.txt');

// readStream.on('data',(chunk)=>{
//     console.log('newwww-----------------------');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);