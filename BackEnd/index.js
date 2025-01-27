const connectToMongo = require( './DB' );
const express = require("express");
connectToMongo();
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello Zeel!");
// });
app.get("/api/v1/login", (req, res) => {
  res.send("Login In");
});

app.use( express.json() );
// Available Routes
app.use( '/api/auth', require( './routes/auth.js' ))
app.use( '/api/notes', require( './routes/notes' ))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});