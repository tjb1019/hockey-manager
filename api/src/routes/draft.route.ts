import express from "express";
import { errorResponse, successResponse } from "../utils/response";

const router = express.Router();
const BASE_URL = "/draft";

router.get(BASE_URL, async (_, res) => {
	try {
		const response = await fetch(
			"https://api-web.nhle.com/v1/draft/rankings/now",
		);
		const rankings = await response.json() as any;
		return successResponse(res, rankings);
		} catch(err) {
			return errorResponse(res, `Failed to fetch draft rankings: ${err}`);
		}
});

export default router;