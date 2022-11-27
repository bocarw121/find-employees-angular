export class CustomAPIError extends Error {
	status: number;

	constructor(message: string, statusCode: number) {
		super(message);
		this.status = statusCode;
	}
}

export function createCustomError(message: string, statusCode: number) {
	return new CustomAPIError(message, statusCode);
}
