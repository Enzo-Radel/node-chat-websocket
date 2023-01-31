const express = require("express");
const app = express();
app.use(express.json())

app.post("/teste", (request, response) => {
    const body = request.body;
    console.log(body);

    return response.json(body);
});

app.listen(3000, () => console.log("iniciou servidor"));