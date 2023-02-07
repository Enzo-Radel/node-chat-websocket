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

    public static async getAll()
    {
        let con = await dbConnection();
        let query = `
            SELECT * FROM ${User.table}
        `;

        const [rows] = await con.query(query);

        return rows;
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

        const [user] = await con.query(query);

        return user[0];
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
