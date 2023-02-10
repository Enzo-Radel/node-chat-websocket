import IUser from "../interfaces/IUser";
import Model from "./Model";
import dbConnection from "../config/dbConnection";

export default class User extends Model
{
    static table: string =  "users";

    public name: string;
    public email: string;
    public password: string;

    constructor(iUser: IUser)
    {
        super();

        this.name = iUser.name;
        this.email = iUser.email;
        this.password = iUser.password;
    }

    public static createFromDatabase(attributes: Array<any>)
    {
        let user = new User({
            name: attributes["name"],
            email: attributes["email"],
            password: attributes["password"],
        });

        user.id = attributes["id"];
        user.created_at = attributes["created_at"];
        user.updated_at = attributes["updated_at"];

        return user;
    }

    public static async getAll()
    {
        let con = await dbConnection();
        let query = `
            SELECT * FROM ${User.table}
        `;

        let usersAsArray;

        let users : Array<User> = [];

        await con.query(query).then((result) => {
            usersAsArray = result[0];
        });

        usersAsArray.forEach(user => {
            users.push(User.createFromDatabase(user))
        });

        return users;
    }

    public static async create(attributes: IUser)
    {
        let user = new User(attributes);

        let con = await dbConnection();
        let query = `
            INSERT INTO ${User.table}
                (
                    id,
                    name,
                    email,
                    password,
                    created_at,
                    updated_at
                ) VALUES (
                    '${user.id}',
                    '${user.name}',
                    '${user.email}',
                    '${user.password}',
                    '${user.formatCreatedAtToMysql()}',
                    '${user.formatUpdatedAtToMysql()}'
                )`;
        con.query(query);

        return user;
    }

    public static async findById(id: string)
    {
        let con = await dbConnection();
        let query = `
            SELECT * FROM ${User.table}
            WHERE id = "${id}"
        `;

        let usersAsArray;

        let users : Array<User> = [];

        await con.query(query).then((result) => {
            usersAsArray = result[0];
        });

        usersAsArray.forEach(user => {
            users.push(User.createFromDatabase(user))
        });

        return users[0];
    }

    public async update(attributes: IUser)
    {
        this.name = attributes.name;
        this.email = attributes.email;
        this.password = attributes.password;

        let con = await dbConnection();
        let query = `
            UPDATE ${User.table}
            SET
                name = "${this.name}",
                email = "${this.email}",
                password = "${this.password}"
            WHERE
                id = "${this.id}"
        `;

        await con.query(query);
    }

    public getFormattedCreatedAt(): string
    {
        return this.created_at.toDateString();
    }

    public formatCreatedAtToMysql(): string
    {
        return this.created_at.toJSON().slice(0, 19).replace('T', ' ')
    }

    public formatUpdatedAtToMysql(): string
    {
        return this.updated_at.toJSON().slice(0, 19).replace('T', ' ')
    }
}
