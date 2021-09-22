import express from 'express'

const app = express()

const hostname = 'localhost'
const port = 8017

app.get('/', (req, res) => {
  res.end('<h2>Welcome</h2>')
})

app.listen(port, hostname, () => {
  console.log(`Hello every body, I'm running at ${hostname}:${port}`);
})