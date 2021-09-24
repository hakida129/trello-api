import { MongoClient } from 'mongodb'
import { env } from '*/config/environment'

export const connectDB = async () => {
  const client = new MongoClient(env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

  try {
    await client.connect()

    console.log('Connected successfully to server')

    await listDatabases(client)

  } finally {
    await client.close()
  }
}

const listDatabases = async (client) => {
  const databasesList = await client.db().admin().listDatabases()
  console.log('Databases:')
  databasesList.databases.forEach(db => console.log(` - ${db.name}`))
}
