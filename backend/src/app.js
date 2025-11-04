
import express from "express";
import session from "express-session";
import { routes } from "./routes/index.js";

const app = express();

app.use(express.json());

app.use(express.static('../frontend'));

app.use(session({
    name: "session.id",
    secret: "chaveSecreta",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 10,
        httpOnly: false,
        secure: false,
        sameSite: "lax"
    }
}));

app.use(routes)

export { app };
