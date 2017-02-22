var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://127.0.0.1:27017/userData')
// mongoose.connect('mongodb://innobook:innobook@ds153709.mlab.com:53709/userdata');

var chatSchema = mongoose.Schema({
	messageFrom: String,
    messageTo: String,
    message: Array
});

var userChat = mongoose.model("chat",chatSchema);
module.exports = userChat;