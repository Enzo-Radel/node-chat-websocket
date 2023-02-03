import mysql from "mysql2";

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "node_chat_websocket"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

export default con;
