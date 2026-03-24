"use strict";

import express from "express";
import { reasons } from "./data/reasons.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.get("/api/reasons", (req, res) => {
    const reason = reasons[Math.floor(Math.random() * reasons.length)];
    res.status(200).json(reason)
});

app.listen(port, () => console.log(`API is running local at http://localhost:${port}`));
