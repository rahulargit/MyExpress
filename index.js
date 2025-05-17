const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from MyExpress (Express) on port 3000!');
});

app.listen(3000, () => {
    console.log('MyExpress server running on port 3000');
});
