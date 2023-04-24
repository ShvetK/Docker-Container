const express = require('express');
const app = express();
const port = 5001;
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

app.use(express.json());



app.post('/count', (req, res) => {
    const file = req.body.file;
    const filePath = path.join(__dirname,`home/${file}`);

    function findChecksum(str, algorithm, encoding) {
        return crypto
            .createHash(algorithm || 'md5')
            .update(str, 'utf8')
            .digest(encoding || 'hex');
    }
    fs.readFile(filePath.trim(), 'utf-8', (err, data) => {
        if(err)
        {
            console.log('Somethinfg went wrong.');
            console.log('Error: ' + err);
        }
        else
        {
            var checksum = findChecksum(data);
            console.log(checksum);  
            res.json({
                "file": file,
                "checksum": checksum  
            });
        }
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});