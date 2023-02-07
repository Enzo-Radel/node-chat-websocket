import mysql from "mysql2/promise";

const conectar = async () => {
	var con = await mysql.createConnection({
	host: "localhost",
		user: "root",
		password: "rootroot",
		database: "node_chat_websocket"
	});

	return con;
}

export default conectar;
