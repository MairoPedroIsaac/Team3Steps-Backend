import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { prisma } from "./db";

dotenv.config({
    encoding: "utf8",
    debug: process.env.NODE_ENV === "development",
});

prisma.$connect()
    .then(()=> {
        console.info("Connected to database!");
    }).catch((err: any) => {
        console.error(`Connection to database failed: ${err.message}`);
    });

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).send({message: "Welcome!"});
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
