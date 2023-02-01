import express from "express";
const app = express();
app.use(express.json())

app.get("/", (request, response) => {
    
    return response.json({
        "chave": "valor"
    })
});

app.listen(3000, () => console.log("iniciou servidor"));