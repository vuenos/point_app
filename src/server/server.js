import express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "development";
const port = process.env.PORT || 5500;

const app = next({ dev, port });

const handle = app.getRequestHandler();

const isDate = new Date();

app.prepare().then(() => {
    const server = express();

    server.get("/", (req, res) => {
        res.send(
            `Running SERVER... ${isDate}`
        );
    });

    server.all("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port, () => {
        console.log(
            `Server running is ${process.env.NODE_ENV} mode on port ${port}`
        );
    });
});