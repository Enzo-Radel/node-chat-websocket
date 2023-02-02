const UserController = {
    getAllUsers: (request, response) => {
        response.send("Tela de usuários pelo controller");
    }
}

export default UserController;