import express from 'express'
import { connectDB } from '*/config/mongodb'
import { env } from '*/config/environment'

connectDB()
  .then(() => console.log('Connected successfully to database server!'))
  .then(() => bootServer())
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

const bootServer = () => {
  const app = express()
  app.get('/test', async (req, res) => {
    res.send('<h2>Hello word</h2>')
  })

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Hello every body, I'm running at ${env.APP_HOST}:${env.APP_PORT}`)
  })
}
