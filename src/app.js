import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js")
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros)
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
});

const livros = [
    {
        id: 1,
        título: "O Senhor dos Anéis"
    },
    {
        id: 2,
        título: "O Hobbit"
    }
];


export default app