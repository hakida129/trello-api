import express from 'express'
import { connectDB } from '*/config/mongodb'
import { env } from '*/config/environment'

const app = express()

connectDB().catch(console.log)

app.get('/', (req, res) => {
  res.send('<h2>Hello word</h2>')
})

app.listen(env.PORT, env.HOST, () => {
  console.log(`Hello every body, I'm running at ${env.HOST}:${env.PORT}`)
})
