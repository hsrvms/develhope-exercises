export type DatabaseConfig = {
	host: string;
	port: number;
	database: string;
	user: string;
	password: string;
};

const dbConfig: DatabaseConfig = {
	host: 'localhost',
	port: 5432,
	database: 'video',
	user: 'postgres',
	password: '3juy8gsegh',
};

export default dbConfig;