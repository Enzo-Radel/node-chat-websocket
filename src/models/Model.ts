import crypto from "crypto"

export default class Model
{
    public id: string;
    public created_at: Date;
    public updated_at: Date;

    constructor()
    {
        this.id = this.generateId();
        this.created_at = new Date();
        this.updated_at = new Date();
    }

    private generateId()
    {
        return crypto.randomUUID();
    }
}
