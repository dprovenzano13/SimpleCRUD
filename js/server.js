const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.listen(3000, () => {
    console.log('listening on 3000')
})

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.sendFile('/Users/BeachCasino/Documents/Code/SimpleCRUD' + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})