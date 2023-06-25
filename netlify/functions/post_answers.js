
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
            connection = mongoose.connection;
            console.log("MongoDB database connection established successfully");
            resolve(true)
        })
        mongoose.connection.on("error", e=>{
            connection= null;
            console.log("error");
            reject(e)
        })

        mongoose.connection.on("disconnected", e=>{
            connection= null;
            console.log("MongoDB database disconnected");
            reject(e)
        })
    })
}


// mongoose.connect(uri, {
//     dbName: 'questionnaire',
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, err => err ? console.log(err) :
//     console.log('Connected to yourDB-name database'));

// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("MongoDB database connection established successfully");
// })


// const { MongoClient } = require("mongodb");

// const mongoClient = new MongoClient(process.env.MONGODB_URI);

// const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        if(!connection){
            await connectMongo()
        }
        console.log("Body:", event.body)
        let answers = JSON.parse(event.body);
        const user = new Answers(answers);
        console.log("User:", user)
        let result = await user.save();
        result = result.toObject();
        console.log("result", result)
        return {
            statusCode: 200,
            body: "Success",
        }
    } catch (error) {
        console.log(error)
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }
