//supporting modules
var bodyParser = require('body-parser');

//getting backend controllers
var userChat = require('../models/chatSchema.js');

exports.friend_selection = function(request,response){
	console.log(request.body.selected_friend);
    userChat.find({$or:[{$and: [{messageFrom: request.body.selected_friend}, {messageTo:"Sandhya"}]},{$and: [{messageFrom: "Sandhya"}, {messageTo:request.body.selected_friend}]}]},function(err,data){
        console.log(data);
        console.log(data[0].message);
        if(err){
            console.log("error in executing query");
            throw err
        }else if(data == null){
            var selected_friend = new userChat({
                messageFrom: "Sandhya",
                messageTo: request.body.selected_friend,
                message: [0],
            });
	        // messageSent.save();
	        selected_friend.save(function(err, data){
		        if(err){
			        console.log("err",err);
		        }else{
			        console.log("success");
                    // console.log(data[0]._id);
			        console.log({data:data,success:"message sent success"})
		        }
	        });
        }else if(data != null){
            console.log(data[0]._id);            
            console.log(data[0].message);
            if(err){
                console.log("error in executing query");
                throw err
            }else if(data[0].message == null){
                console.log(data[0].message);
                console.log("no messages to retrieve");
            }else {
                console.log(data[0].message);
            }
        }
    })
}

exports.sendMessage = function(request,response){

}