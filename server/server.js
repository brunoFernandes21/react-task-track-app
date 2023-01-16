import express from 'express'
import bcrypt from 'bcrypt'
import cors from 'cors'

const app = express()

//this allows our app t he use json
app.use(express.json())
app.use(cors())

//users array to store all new users
const tasks = [
    {
        "title": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true,
        "id": 1
    },
    {
        "title": "Meeting at School",
        "day": "May 10th at 1:30pm",
        "reminder": false,
        "id": 2
    },
    {
        "title": "Food Shopping",
        "day": "Feb 9th at 4:00pm",
        "reminder": true,
        "id": 3
    },
    {
        "title": "Coding Challenge",
        "day": "Friday",
        "reminder": false,
        "id": 5
    },
    {
        "title": "New react Course",
        "day": "28th Feb 2023",
        "reminder": true,
        "id": 6
    }
]

 const users = [
    {
        "name": "Emily",
        "password": "lalalala"
    }
 ]

app.get('/', (request, response) => {
    response.send("Success")
})
//testing our server by showing a message
app.get('/tasks', (request, response) => {
    response.json(tasks)
})
 app.get('/users', (request, response) => {
    response.json(users)
 })
  //registering a new user
app.get('/register', (request, response) => {
    
})
//login user in
app.get('/login', (request, response) => {
    response.send('login')
})






//  app.post('/users', async (request, response) => {
//     try {
//         const hashedPassword = await bcrypt.hash(request.body.password, 10)
//         const user = {name: request.body.name, password: hashedPassword}
//         users.push(user)
//         response.status(201).send("User has been added")
//     }catch(error) {
//         response.status(500).send(error)
//     } 
//  })

 //login in a user
//  app.post('/users/login', async (request, response) => {
//     //check if user name exists in our users array
//     const user = users.find(user => user.name === request.body.name)
//     //if not send error message
//     if(user === null) {
//         return response.status(400).send('User does not exists')
//     }
//     try {
//         if(await bcrypt.compare(request.body.password, user.password)){
//             response.send("Success")
//         } else{
//             response.send('Wrong credentials')
//         }
//     } catch (error) {
//         response.status(500).send(error)
//     }
//  })

//start the server
//To start the server we will use app.listen() which takes two arguments:
//1 - The port number on which the server will run. In our case, it is 8000.
 // 2 - A callback function will be called when the server starts which in our case will just log the message that the server is running.
app.listen(8000, () => {
    console.log(`Server is running on port 8000.`)
})