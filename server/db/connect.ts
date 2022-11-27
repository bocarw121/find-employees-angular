import mongoose from 'mongoose';

const uri = process.env['MONGO_URI'];

export function connectDb() {
	mongoose.connect(uri as string, () => {
		console.log('Connected to database');
	});
}
