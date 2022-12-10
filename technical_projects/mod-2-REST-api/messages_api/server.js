const express = require('express')
const app = express()
const PORT = 3000

const seed = require('./seed')
const { db } = require('./db')
const { Message } = require('./models/index')

seed()

let id = 2

app.use(express.json())

//*************** ROUTES ******************//

// Route to show json of all cards
app.get('/messages', async (req, res) => {
    let allMessages = await Message.findAll()
    res.json({allMessages})
})

app.get('/messages/:id', async (req, res) =>  {
    let messageID = req.params.id;
    let message = await Message.findByPk(messageID)
    res.json({message})
})

app.post('/messages', function(req, res) {
    let date = new Date(Date.now());
    date = date.toString();
    let message = req.body.message;
    var sql = `INSERT INTO messages (id, message, createdAt, updatedAt) VALUES ("${id}", "${message}", "${date}", "${date}")`;
    db.query(sql);
    console.log(req.body.message);
    id = id + 1;
    res.send('Added message to database at ' + date);
})

app.put('/messages/:id', function(req, res) {
    let date = new Date(Date.now());
    date = date.toString();
    let message = req.body.message;
    let sql = `UPDATE messages SET message = "${message}", updatedAt = "${date}" WHERE id = ${req.params.id};`
    db.query(sql)
    res.send("Updated message with id " + req.params.id + " to " + message)
})

app.delete('/messages/:id', function(req, res) {
    let sql = `DELETE FROM messages WHERE id = ${req.params.id}`;
    db.query(sql);
    res.send("Deleted message with ID " + req.params.id);
})

app.listen( PORT, () => {
    console.log(` Your server is now listening to port ${PORT}`)
})