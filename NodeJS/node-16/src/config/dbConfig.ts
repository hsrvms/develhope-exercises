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
	password: 'postgres',
};

export default dbConfig;