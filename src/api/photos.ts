import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

const API_KEY = process.env.PEXELS_API_KEY;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Missing search query" });
  }

  try {
    const response = await axios.get("https://api.pexels.com/v1/search", {
      headers: {
        Authorization: API_KEY!,
      },
      params: {
        query,
        orientation: "landscape",
      },
    });

    res.status(200).json(response.data.photos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch from Pexels" });
  }
}
