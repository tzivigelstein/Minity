import { MongoClient } from 'mongodb'

const uri = `${process.env.MONGODB_URI}/${process.env.MONGODB_DB}`
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI is not set')
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }

  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
