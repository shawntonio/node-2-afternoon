const express = require('express');
const app = express();
const MessagesCtrl = require('./controllers/messages_controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.get('/api/messages', MessagesCtrl.read)
app.post('/api/messages', MessagesCtrl.create)
app.put('/api/messages/:id', MessagesCtrl.update)
app.delete('/api/messages/:id', MessagesCtrl.delete)

app.listen(3001, () => console.log('listening'))