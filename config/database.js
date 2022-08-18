//start with dependency -declare
const mongoose =require('mongoose')
//CREATED ASYNC TO SEE IF WE GET ERROR
const connectDB= async () => {
try{
const conn = await mongoose.connect(
    process.env.DB_CONNECTION
)
console.log(`MongoDB connected: ${conn.connection.host}`)
}

catch(err){
console.log(err)
process.exit(1)

}
}
module.exports =connectDB


//Connect to Mongo
// mongoose.connect(
//     process.env.DB_CONNECTION, 
//     { useNewUrlParser: true }, 
//     () => {console.log("Connected to db!");}
// )
//use async if connect