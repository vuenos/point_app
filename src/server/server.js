import express from "express";
import next from "next";
import cors from "cors";
import colors from "@colors/colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"

dotenv.config();

connectDB();


const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 5500;

const app = next({ dev, port });

const handle = app.getRequestHandler();

const isDate = new Date();

app.prepare().then(() => {
    const server = express();

    server.use(cors());
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }))

    server.get("/", (req, res) => {
        res.send(
            `🚀 Running SERVER is .... ${isDate}`
        );
    });

    server.get("/getdata", (req, res) => {
        res.send(`PORT: ${port} 서버에서 정상적으로 응답함`);
    });

    server.all("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port, () => {
        console.log(
            `Server running is ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold
        );
    });
});