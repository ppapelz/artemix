import { Model } from "sequelize";

export abstract class BaseRepository<T extends Model> {
    protected readonly model: typeof Model & { new(): T };

    constructor(model: typeof Model & { new(): T }) {
        this.model = model;
    }

    async create(item: T["dataValues"]): Promise<T> {
        return await this.model.create(item);
    }

    async findByID(id: number): Promise<T | null> {
        return await this.model.findByPk(id);
    }

    async findAll(): Promise<T[]> {
        console.log(this.model.name)
        return await this.model.findAll();
    }

    async update(id: number, item: T["dataValues"]): Promise<number> {
        const [affectedCount] = await this.model.update(item, { where: { id: id as any } });
        return affectedCount;
    }

    async delete(id: number): Promise<number> {
        return await this.model.destroy({ where: { id: id as any } });
    }
}
