import { MongoClient } from 'mongodb'

let cached = global.mongo
if (!cached) cached = global.mongo = {}
export async function connectToDatabase() {
  if (cached.connection) return cached.connection
  if (!cached.promise) {
    const connection = {}
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
    cached.promise = MongoClient.connect(process.env.MONGODB_URI, options)
      .then(client => {
        connection.client = client
        return client.db(process.env.MONGODB_DB)
      })
      .then(db => {
        connection.db = db
        cached.connection = connection
      })
  }
  await cached.promise
  return cached.connection
}
