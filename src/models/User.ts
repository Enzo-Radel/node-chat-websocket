import IUser from "../interfaces/IUser";
import Model from "./Model";
import dbConnection from "../config/dbConnection";

export default class User extends Model
{
    private name: string;
    private email: string;
    private password: string;

    constructor(iUser: IUser)
    {
        super();

        this.name = iUser.name;
        this.email = iUser.email;
        this.password = iUser.password;
    }

    public static create(attributes: IUser)
    {
        let user = new User(attributes);

        const datetime = user.created_at.toJSON().slice(0, 19).replace('T', ' ')

        console.log(datetime);

        var sql = `INSERT INTO users (id, name, email, password, created_at, updated_at) VALUES ('${user.id}', '${user.name}', '${user.email}', '${user.password}', '${user.formatCreatedAtToMysql()}', '${user.formatUpdatedAtToMysql()}')`;
        dbConnection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });

        // user.save();

        return user;
    }

    public getFormattedCreatedAt(): string
    {
        return this.created_at.toDateString();
    }

    private formatCreatedAtToMysql(): string
    {
        return this.created_at.toJSON().slice(0, 19).replace('T', ' ')
    }

    private formatUpdatedAtToMysql(): string
    {
        return this.updated_at.toJSON().slice(0, 19).replace('T', ' ')
    }
}
