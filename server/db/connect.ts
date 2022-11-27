import mongoose from 'mongoose';

export function connectDb(uri: string) {
	mongoose.connect(uri, () => {
		console.log('Connected to database');
	});
}
