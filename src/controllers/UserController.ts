import User from "../models/User";

const UserController = {
    getAllUsers: (request, response) => {
        User.getAll().then((users) => {
            response.render("user/index", {"users": users});
        });
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

        User.create(data).then(() => {
            response.redirect("/user");
        });
    },

    findOneUser: (request, response) => {
        User.findById(request.params.id).then((user) => {
            response.render("user/show", {"user": user});
        });
    }
}

export default UserController;