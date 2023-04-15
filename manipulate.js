import fs from 'fs';

//read
fs.readFile('./text.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
   // console.log(data.toString());
});

//write

fs.writeFile('./text2.txt','imposeum final',()=>{
    //console.log('file was written');
});

//directories
if(!fs.existsSync('./assets')){

    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
    });

} else {
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}
//delete

if(fs.existsSync('./text2.txt')){
    fs.unlink('./d1.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    });
}