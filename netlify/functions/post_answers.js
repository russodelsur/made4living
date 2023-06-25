
// To connect with your mongoDB database
const mongoose = require('mongoose');
const Answers = require("./schemas/answersSchema")
require('dotenv').config();

let connection = null;
const uri = process.env.MONGODB_URI;

async function connectMongo(){
    return new Promise((resolve,reject)=>{
        mongoose.connect(uri, {
            dbName: 'questionnaire',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        mongoose.connection.on("connected", ()=>{
            resolve( mongoose.connection)
        })
        mongoose.connection.on("error", e=>{
            connection= null;
            reject(e)
        })

        mongoose.connection.on("disconnected", e=>{
            connection= null;
            reject(e)
        })
    })
}

const handler = async (event) => {
    try {
        if(!connection){
            connection = await connectMongo()
        }
        console.log("Body:", event.body)
        let answers = JSON.parse(event.body);
        const user = new Answers(answers);
        await user.save();
        return {
            statusCode: 200,
            body: JSON.stringify({message: "Data saved succesfully"}),
        }
    } catch (error) {
        console.log(error)
        if (error.code === 11000) {
            return { statusCode: 500, body: JSON.stringify({message: "Email address has already been used"}) }
        } else {
            return { statusCode: 500, body: JSON.stringify({message: "An error has occurred"}) }
        }
    }
}

module.exports = { handler }
