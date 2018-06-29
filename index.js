
var prompt = require("prompt");
var colors = require("colors/safe");
var fs = require("fs");

var dataToStore,jsonDataStore;

//start the prompt

prompt.start();

var schema = {
	properties:{
		username:{
			pattern:/^[a-zA-Z\s\-]+$/,
			message:colors.rainbow("Name must be only letters,space,or dashes"),
			required:true 
		},
		email:{
			pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			message:colors.rainbow("This is not a valid email"),
			required:true
		},
		phoneNo:{
			pattern:/^\d{10}$/,
			message:colors.rainbow("This is not valid phone number"),
			required:true
		}
	}
};

//get input from user

prompt.get(schema,function(err,result){
	
	//log the result

	console.log(colors.cyan("Command-line input received: "));
	console.log(colors.cyan(" username: " + result.username));
	console.log(colors.cyan(" email: " + result.email));
	console.log(colors.cyan(" phoneNo: " + result.phoneNo));

	dataToStore =  {
		username:result.username,
		email:result.email,
		phoneNo:result.phoneNo
	};

	console.log(colors.grey(dataToStore));

	jsonDataStore = JSON.stringify(dataToStore);
	fs.writeFile("inputdata.json",jsonDataStore,function(err){
		if(err) {
			return console.error(colors.rainbow(err));
		}
		console.log(colors.grey(jsonDataStore));
	})


})