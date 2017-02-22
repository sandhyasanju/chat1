//acquiring dependencies
var express = require('express');
var router = express.Router();
var controller = require('../controllers/chatController')

//post method and routing of chat
router.post("/chat",function(request,response){
    controller.friend_selection(request,response);
    console.log("message sent");
})

module.exports = router;