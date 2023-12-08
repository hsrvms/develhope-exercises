import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import db from '../db';

const getAll = async (req: Request, res: Response) => {
	const users = await db.manyOrNone(`SELECT * FROM users`);

	if (!users) {
		res.status(400).json({ msg: 'There is no user in this table.' });
	}

  res.status(200).json(users);
};

const logIn = async (req: Request, res: Response) => {
	const { username, password } = req.body;

	const user = await db.one(
		'SELECT * FROM users WHERE username=$1',
		username
	);

	if (user && user.password === password) {
		const payload = {
			id: user.id,
			username,
		};
		const { SECRET = '' } = process.env;
		const token = jwt.sign(payload, SECRET);

		console.log(token);

		await db.none(`UPDATE users SET token=$2 WHERE id=$1`, [
			user.id,
			token,
		]);
		res.status(200).json({ id: user.id, username, token });
	} else {
		res.status(400).json({ msg: 'Username or password incorrect' });
	}
};

const signUp = async (req: Request, res: Response) => {
	const { username, password } = req.body;
	const user = await db.oneOrNone(
		`SELECT * FROM users WHERE username=$1`,
		username
	);

	if (user) {
		res.status(409).json({ msg: 'Username is already taken.' });
	} else {
		const { id } = await db.one(
			`INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id`,
			[username, password]
		);
		res.status(201).json({ id, msg: 'User created succesfully' });
	}
};

const logOut = async (req: Request, res: Response) => {
	const user: any = req.user;
	await db.none(`UPDATE users SET token=$2 WHERE id=$1`, [user?.id, null]);
	res.status(200).json({ msg: 'Logout successful.' });
};

const userController = {
	getAll,
	logIn,
	signUp,
	logOut,
};

export default userController;
