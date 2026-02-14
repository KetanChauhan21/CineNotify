import express from 'express'
const app = express();

const port = 3300;

const b = 3
const c = 4

app.get("/", (req, res) => {
  res.send("Server running!");
//   res.send(`the value is: ${b+c}`)
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
