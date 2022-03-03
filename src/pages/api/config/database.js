import { connect, connections } from 'mongoose'
import { getSession } from 'next-auth/react'

const uri = `${process.env.MONGODB_URI}/${process.env.MONGODB_DB}`

const useDatabase = handler => {
  return async (req, res) => {
    const session = await getSession({ req })

    if (connections[0].readyState) return handler(req, res, session)

    connect(uri)
      .then(console.log('SUCCESS: Database connected successfuly'))
      .catch(error => {
        console.log("ERROR: Couldn't connect to database")
        throw new Error(error)
      })

    return handler(req, res, session)
  }
}

export default useDatabase
