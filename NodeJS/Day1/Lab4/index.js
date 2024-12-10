import express from "express";
import "dotenv/config";

const PORT = process.env.PORT || 2000;
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} request was made to ${req.url}`);
  next();
});

// app.use((req,res,next)=>{
//     res.status(404).send("requested page not found")
// })

app.get('/crime',(req,res)=>{
    res.status(404).send({"msg" : "Please fire up some safe content"})
})
// In-memory credentials for simplicity
const credentials = {
  username: "admin",
  password: "admin",
};

// POST request to /form
app.post("/form", (req, res) => {
  const { name, age } = req.body; // Parse name and age from request body
  if (!name || !age) {
    return res.status(400).send("Name and age are required.");
  }
  res.status(201).send(`Person's name is ${name} and age is ${age}`);
});

// POST request to /login
app.post("/login", (req, res) => {
  const { username, password } = req.body; // Parse username and password
  if (!username || !password) {
    return res.status(400).send("Username and password are required.");
  }

  // Check credentials
  if (username === credentials.username && password === credentials.password) {
    res.status(200).send({ msg: "Login successful" });
  } else {
    res.status(401).send({ msg: "Invalid credentials" });
  }
});

// GET requests
app.get("/google", (req, res) => {
  res.status(200).send({ msg: "This is a Google page" });
});

app.get("/twitter", (req, res) => {
  res.status(200).send("<h1>Welcome to Twitter</h1>");
});

app.get("/amazon", (req, res) => {
  res.status(200).send({ msg: "This is an Amazon page" });
});

app.get("/", (req, res) => {
  const data = {
    name: "Samanwita",
    email: "saman@gmail.com",
    city: "Bangalore",
    age: 21,
  };
  res.status(200).send(data);
});


// Start the server
app.listen(PORT, () => {
  console.log(`App is running on ${PORT}...`);
});
