import express, { Request, Response } from 'express';
const bodyParser = require("body-parser");

// Create Express server
const app = express();

// Express configuration
app.set("port", 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Index controller
const index = (req: Request, res: Response) => {
    res.send('Admin Homepage');
};

// simple route
app.get("/", index);

export default app;