import express from "express";
//importar as rotas
//importar middleware de erro

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

//app.use(rotas)
//app.use(middlewa de erro)

export { app };