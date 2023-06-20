// To connect with your mongoDB database
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI

mongoose.connect(uri, {
    dbName: 'questionnaire',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) :
    console.log('Connected to yourDB-name database'));

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})
 
// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    answers: {
        type: Array,
        default: [],
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.model('user_answers', UserSchema);
User.createIndexes();


// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 4000");
app.use(express.json());
app.use(cors());
// app.get("/", (req, resp) => {
 
//     resp.send("App is Working");
//     // You can check backend is working or not by
//     // entering http://loacalhost:5000
     
//     // If you see App is working means
//     // backend working properly
// });
 
app.post("/send", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        console.log(result)
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }
 
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});
app.listen(process.env.PORT || 4000,)


// const express = require('express')
// const cors = require("cors");


// const app = express();
// const port = process.env.PORT || 3001

// app.use(cors());
// app.use(express.json());

// // utility function - gets projects data, and creates the file if it doesn't exist
// function getProjects(){
//     try {
//         const content = fs.readFileSync('projects.json')
//         return JSON.parse(content);
//     }catch(e){ // file non-existent
//         fs.writeFileSync('projects.json', '[]')
//         return []
//     }
// }

// // // Add project function, it will add a project picking the variables from the body 
// // function addProject(id, title, description, url){
// //     const projects = getProjects()
// //     const project = {"id": id, "title": title, "description": description, "URL": url };
// //     projects.push(project)
// //     fs.writeFileSync('projects.json', JSON.stringify(projects))
// // }

// // // Edit projects title, or description, or both. The function checks if variable is undefined to add new value or
// // // retain the existing. Then replaces the current project with new edited project.
// // function replaceProject(id, title, description, url){
// //     let projects = getProjects();
// //     let target = projects[id-1];
// //     let des;
// //     let u;
// //     if (description === undefined) {
// //         des = target.description;
// //     } else {
// //         des = description
// //     }
// //     if (title === undefined) {
// //         t = target.title;
// //     } else {
// //         t = title
// //     }
// //     if (url === undefined) {
// //         u = target.URL;
// //     } else {
// //         u = url
// //     }
// //     const project = {"id": id, "title": t, "description": des, "URL": url };
// //     projects[id-1] = project;
// //     fs.writeFileSync('projects.json', JSON.stringify(projects))
// // }

// // // Function that deletes project by id. Removes project with the input id.
// // // it runs a for loop to reassign ids in order again.
// // function deleteProjectbyid(id){
// //     const projects = getProjects()
// //     const x = id-1
// //     projects.splice(x, 1)
// //     for(let i=0; i<projects.length; i++) {
// //         projects[i].id = i+1;
// //       }
// //     fs.writeFileSync('projects.json', JSON.stringify(projects))
// // }

// // // Utility function for json formats.
// // app.use(express.json())

// // // link to display all current projects. 
// app.get('/api', (req, resp)=>{
//     const projects = getProjects();
//     resp.send(projects);
// })

// // create new projects by fetching body data and passing it to the function addProject.
// app.post('/projects', (req, resp)=>{
//     const projects = getProjects();
//     const id = projects.length + 1;
//     const title = req.body.title;
//     const description = req.body.description;
//     const url = req.body.URL;
//     if (projects.indexOf(title) > -1){
//         resp.send('Project already exists')
//     }else{
//         addProject(id, title, description, url )
//         resp.send('Success')
//     }
// })

// // //Put function that checks if data has been added to body, it it has, runs replaceProject function.
// // app.put('/projects', (req, resp)=>{
// //     const id = Number(req.body.id);
// //     const title = req.body.title;
// //     const description = req.body.description;
// //     const url = req.body.URL;
// //     if (title === undefined && description === undefined) {
// //         resp.send('No title or description inputs, please try again')     
// //     } else {
// //         replaceProject(id, title, description, url);
// //         resp.send('Success')        
// //     }

// // });

// // // delete projects by id. Gets id from URL, searches the id, if it exists, it runs the deleteProjecbyid function. 
// // // otherwise, it lets the user know that project doesn't exist
// // app.delete('/delete', (req, resp) => {
// //     const id = Number(req.body.id);
// //     const projects = getProjects()
// //     let ids=[];
// //     for (let i = 0; i < projects.length; i++) {
// //         ids.push(projects[i].id);
// //     }
// //     if (ids.includes(id)){
// //         deleteProjectbyid(id)
// //         resp.send('Success')
// //     }else{
// //         resp.send('Project does not exist')
// //     }
// // })

// // app.listen(port, ()=>console.log('Listening engaged'))
