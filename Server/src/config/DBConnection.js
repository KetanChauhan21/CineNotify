import { MongoClient } from 'mongodb'
import 'dotenv/config'

const DBConnect = async () => {
    try {
        const client = await new MongoClient(process.env.MONGO_URI).connect();
        
    } catch (error) {
        
    }
}