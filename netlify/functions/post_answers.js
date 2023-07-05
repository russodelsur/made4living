
// To connect with your mongoDB database
const mongoose = require('mongoose');
const AnswersSchema = require("./schemas/answersSchema")
require('dotenv').config();

const uri = process.env.MONGODB_URI;
async function connectMongo(){
    return new Promise((resolve,reject)=>{
        mongoose.set("strictQuery", false);
        mongoose.connect(uri, {
            dbName: 'questionnaire',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        resolve()
        reject()
        })
}

const handler = async (event) => {
    try {
        await connectMongo();
        console.log("Body:", event.body)
        let answers = JSON.parse(event.body);
        const user = new AnswersSchema(answers);
        console.log("USER:", user)
        await user.save();
        return {
            statusCode: 200,
            body: JSON.stringify({message: "Data saved succesfully in our server"}),
        }
    } catch (error) {
        console.log(error)
        if (error.code === 11000) {
            console.log("Errorrrrrrrr:",error)
            return { statusCode: 500, body: JSON.stringify({message: "Email address has already been used, please use a different address"}) }
        } else {
            return { statusCode: 500, body: JSON.stringify({message: "An error has occurred"}) }
        } 
    }
}

module.exports = { handler }

