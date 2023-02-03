import User from "../models/User";

const UserController = {
    getAllUsers: (request, response) => {
        response.render("user/index");
    },

    createNewUser: (request, response) => {
        response.render("user/create");
    },

    storeNewUser: (request, response) => {
        let data = request.body;

        if (data["password"] != data["confirm-password"]) {
            console.log("senha não é igual"); // substituir por mensagem de erro an tela
            response.redirect("/user/create");
        }

        let user = User.create(data);

        response.redirect("/user");
    }
}

export default UserController;