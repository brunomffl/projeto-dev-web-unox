import express from "express";
//importar as rotas
//importar middleware de erro

const app = express();

app.use(express.json());
//app.use(rotas)
//app.use(middlewa de erro)

export { app };