const {MongoClient} = require('mongodb')

const state = {
    db:null
}

const url = 'mongodb://astlelijo04:PvIx3StcfsHMfmIb@ac-iwwlbfc-shard-00-00.nani97p.mongodb.net:27017,ac-iwwlbfc-shard-00-01.nani97p.mongodb.net:27017,ac-iwwlbfc-shard-00-02.nani97p.mongodb.net:27017/?replicaSet=atlas-11291c-shard-0&ssl=true&authSource=admin'
const dbName = 'Cybernatics'

const client = new MongoClient(url);
const connectDb = async (done) =>{
    try{
        await client.connect();
        const db = client.db(dbName)
        state.db = db
        return done()
    }catch(err){
        return done(err)
    }
}

const get = ()=> state.db

module.exports = {
    connectDb,
    get
}