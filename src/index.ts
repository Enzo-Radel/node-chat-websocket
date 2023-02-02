import express from "express";
const app = express();

app.set('view engine', 'ejs');
app.set("views", __dirname+'/views');
app.use(express.json());

import userRoute from "./routes/UserRoutes";
app.use("/user", userRoute);

app.listen(3000, () => console.log("iniciou servidor"));