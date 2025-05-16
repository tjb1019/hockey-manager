import express from "express";

const router = express.Router();
const BASE_URL = "/ping";

router.get(BASE_URL, (_, res) => {
	return res.status(200).json({ data: 'pong' });
});

export default router;