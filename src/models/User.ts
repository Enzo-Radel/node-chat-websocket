import IUser from "../interfaces/IUser";
import Model from "./Model";

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

        user.save();

        return user;
    }

    public getFormattedCreatedAt(): string
    {
        return this.created_at.toDateString();
    }
}
