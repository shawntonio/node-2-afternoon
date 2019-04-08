const messages = []
let id = 0


module.exports = {
	create: (req, res) => {
		const newMessage = req.body
		newMessage.id = id++
		messages.push(newMessage)
		res.send(messages)
	},

	read: (req, res) => {
		res.send(messages)
	},

	update: (req, res) => {
		const { id } = req.params
		const {text} = req.body
		const index = messages.findIndex(message => +message.id === +id)
		messages[index].text = text || messages[index].text
		res.send(messages) 
	},

	delete: (req, res) => {
		const { id } = req.params
		const index = messages.findIndex(message => +message.id === +id)
		messages.splice(index, 1)
		res.send(messages)
	}
}