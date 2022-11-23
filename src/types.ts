export interface User {
	id: number;
	name: string;
	email: string;
	username: string;
	address: Address;
	phone: string;
	website: string;
	company: Company | null;
}

export type Address = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
};

export type Geo = {
	lat: string;
	lng: string;
};

export type Company = {
	name: string;
	start: string;
};
