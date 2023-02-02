import express from "express";
const app = express();

app.set('view engine', 'ejs');
app.set("views", __dirname+'/views');
app.use(express.json());

app.get("/", (request, response) => {
    return response.render("home");
});

app.listen(3000, () => console.log("iniciou servidor"));