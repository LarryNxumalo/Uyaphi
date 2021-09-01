const aws = require('aws-sdk');
const ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
	if(!event.request.userAttributes.sub) {
		console.log('Error cognito user id:sub not present no user written to DynamoDB chief')
		//Finish Lamda returen to Cognito
		context.done(null, event);
		return;
	}
	//If we have a sub
	//Save the user to DynamoDB
	const date = new Date();
	const params = {
		//Item we need to save to DB
		Item: {
			//S stands for string I is integer
			'id': {S: event.request.userAttributes.sub},
			'__typename':{S: 'User'},
			'username': {S: event.userName},
			'email':{S: event.request.userAttributes.email},
			'createdAt': {S: date.toISOString()},
			'updatedAt':{S: date.toISOString()},
		},
		TableName: process.env.USERTABLE,
	}

	try {
		await ddb.putItem(params).promise();
		console.log('Success')
	} catch (e) {
		console.log("Error", e);
	}
	context.done(null, event)
}