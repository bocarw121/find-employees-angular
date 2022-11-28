import mongoose from 'mongoose';

export async function connectDb(uri: string) {
	try {
		await mongoose.connect(uri);

		console.info('Connected to database');
	} catch (error) {
		console.error(error);
	}
}
