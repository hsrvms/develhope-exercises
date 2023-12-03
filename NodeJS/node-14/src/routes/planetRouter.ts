import express, { Router, Request, Response } from 'express';
import Joi from 'joi';

const router: Router = express.Router();

type Planet = {
	id: number;
	name: string;
};

type Planets = Planet[];

let planets: Planets = [
	{ id: 1, name: 'Earth' },
	{ id: 2, name: 'Mars' },
];

const planetSchema = Joi.object({
	id: Joi.number().integer().required(),
	name: Joi.string().required(),
});

router.get('/', (req: Request, res: Response) => {
	res.json(planets);
});

router.get('/:id', (req: Request, res: Response) => {
	const planetId = parseInt(req.params.id, 10);
	const planet = planets.find((p) => p.id === planetId);

	if (!planet) {
		return res.status(404).json({ error: 'Planet not found' });
	}
	res.json(planet);
});

router.post('/', (req: Request, res: Response) => {
	const newPlanet: Planet = req.body;

	const validationResult = planetSchema.validate(newPlanet);

	if (validationResult.error) {
		return res
			.status(400)
			.json({ error: validationResult.error.details[0].message });
	}

	planets.push(newPlanet);
	res.status(201).json({ msg: 'Planet created successfully' });
});

router.put('/:id', (req: Request, res: Response) => {
	const planetId = parseInt(req.params.id, 10);
	const updatedPlanet: Planet = req.body;

	const validationResult = planetSchema.validate(updatedPlanet);
	if (validationResult.error) {
		return res
			.status(400)
			.json({ error: validationResult.error.details[0].message });
	}

	const existingPlanet = planets.find((p) => p.id === planetId);
	if (!existingPlanet) {
		return res.status(404).json({ error: 'Planet not found' });
	}
});

router.delete('/:id', (req: Request, res: Response) => {
	const planetId = parseInt(req.params.id, 10);

	const index = planets.findIndex((p) => p.id === planetId);

	if (index === -1) {
		return res.status(404).json({ error: 'Planet not found' });
	}

	planets.splice(index, 1);
	res.json({ msg: 'Planet deleted successfully' });
});

export default router;
