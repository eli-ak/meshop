import mongoose from 'mongoose';

const connectDB = async () => {
   try {
	const conn = await mongoose.connect(process.env.MONGO_URL,{
	   useUnifiedTopology:true,
	   useNewUrlParser:true,
	});
	console.log(`MONGO DB CONNECTED:${conn.connection.host}`.bgGreen);
   } catch (error){
	console.log(error.message);
	process.exit(1);
   }
}
export default connectDB;