const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient



MongoClient.connect('mongodb+srv://yoda:starwars13@cluster0.aq26hzx.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('star-wars-quotes')
        const quotesCollection = db.collection('quotes')
        app.listen(3000, () => {
            console.log('listening on 3000')
        })
        
        app.use(bodyParser.urlencoded({ extended: true}))
        
        app.get('/', (req, res) => {
            res.sendFile('/Users/BeachCasino/Documents/Code/SimpleCRUD' + '/index.html')
        })
        
        app.post('/quotes', (req, res) => {
            quotesCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })
    })
    .catch(error => console.error(error))
