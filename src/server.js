import express from 'express'
import { mapOrder } from '*/utilities/sorts.js'
const app = express()

const hostname = 'localhost'
const port = 8017

app.get('/', (req, res) => {
  res.send(`<h2>Hello word</h2>`)
})

app.listen(port, hostname, () => {
  console.log(`Hello every body, I'm running at ${hostname}:${port}`);
})
