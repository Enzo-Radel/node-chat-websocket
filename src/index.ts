import express from "express";
import bodyParser from "body-parser";
const app = express();

app.set('view engine', 'ejs');
app.set("views", __dirname+'/views');
app.use(bodyParser.urlencoded({ extended: true }));

import userRoute from "./routes/UserRoutes";
app.use("/user", userRoute);

app.listen(3000, () => console.log("iniciou servidor"));