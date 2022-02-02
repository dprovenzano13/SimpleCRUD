const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('listening on 3000')
})

app.get('/', (req, res) => {
    res.sendFile('/Users/BeachCasino/Documents/Code/SimpleCRUD' + '/index.html')
})