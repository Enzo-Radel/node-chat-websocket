import User from "../models/User";

const UserController = {
    index: (request, response) => {
        User.getAll().then((users) => {
            response.render("user/index", {"users": users});
        });
    },

    create: (request, response) => {
        response.render("user/create");
    },

    store: (request, response) => {
        let data = request.body;

        if (data["password"] != data["confirm-password"]) {
            console.log("senha não é igual"); // substituir por mensagem de erro an tela
            response.redirect("/user/create");
            return;
        }

        User.create(data).then(() => {
            response.redirect("/user");
        });
    },

    show: (request, response) => {
        User.findById(request.params.id).then((user) => {
            response.render("user/show", {"user": user});
        });
    },

    edit: (request, response) => {
        User.findById(request.params.id).then((user) => {
            response.render("user/edit", {"user": user});
        });
    },

    update: (request, response) => {
        User.findById(request.params.id).then((user) => {
            let data = request.body;

            if (data["password"] != data["confirm-password"]) {
                console.log("senha não é igual"); // substituir por mensagem de erro an tela
                response.redirect("/user/edit/" + user.id);
                return;
            }

            user.update(data).then(() => {
                response.redirect("/user");
            });
        });
    },

    delete: (request, response) => {
        User.findById(request.params.id).then((user) => {
            user.delete().then(() => {
                response.redirect("/user");
            });
        });
    },
}

export default UserController;