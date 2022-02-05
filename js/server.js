const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient



MongoClient.connect('mongodb+srv://yoda:starwars13@cluster0.aq26hzx.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('star-wars-quotes')
        const quotesCollection = db.collection('quotes')
        
        app.set('view engine', 'ejs')
        

        app.use(bodyParser.urlencoded({ extended: true}))
        
        app.get('/', (req, res) => {
            db.collection('quotes').find().toArray()
              .then(results => {
                console.log(results)
              })
              .catch(error => console.error(error))
          })
        
        app.post('/quotes', (req, res) => {
            quotesCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })
        app.listen(3000, () => {
            console.log('listening on 3000')
        })
    })
    .catch(error => console.error(error))
