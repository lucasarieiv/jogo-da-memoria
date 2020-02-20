const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/src', express.static('src'));
app.use('/css', express.static('css'));
app.use('/img', express.static('img'));

app.use('/', router);
app.listen(3000);

console.log('Running at Port 3000');