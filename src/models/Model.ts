import crypto from "crypto"

export default class Model
{
    protected id: string;
    protected created_at: Date;
    protected updated_at: Date;

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

    public save()
    {
        // adicionar no banco de dados
    }
}
