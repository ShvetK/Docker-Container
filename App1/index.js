const { response } = require('express');
const express = require('express');
const app = express();
const port = 5000;
const fs = require('fs');
const path = require('path');
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!, My name is Shvet');
});


app.post('/checksum', (req, res) => {

  const file = req.body.file;
  const filePath = path.join(__dirname,`home/${file}`);

    fs.readFile(filePath, 'utf-8', (err, data) => {

      if(file.trim() == '' || file == undefined)
      {
        console.log('File name not available.');
        res.json({
          "file": null,
          "error": "Invalid JSON input."
        });
      }
  
      else if(!fs.existsSync(filePath.trim()))
      {
        console.log('File is not available in directory.');
        res.json({
          "file": "missing.dat",
          "error": "File not found."
        });
      }
  
      else if(err){
        console.log('This is a Error section.');
        console.log(err);
        res.send('Error is : ' + err);
      }
      
      else
      {
        console.log('File is found in the directory.');
        console.log(data);
        const url = 'http://secondCon:5001/count';
        const options = {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            file
          }) 
        };
        fetch(url, options).then((response) => response.json())
        .then((data) => res.json(data));
      }    
  });
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});