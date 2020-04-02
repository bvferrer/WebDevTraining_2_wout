const express = require('express');
const app = express();
console port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World Covid!')
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});