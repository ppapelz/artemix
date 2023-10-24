import { DeepPartial, Entity, EntityTarget, FindOptionsWhere, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { dataSource } from '../server-database';

export abstract class BaseRepository<Entity> {
    protected readonly repository: Repository<Entity>;

    constructor(
        private readonly _entity: EntityTarget<Entity>
    ) {
        this.repository = dataSource.getRepository(_entity);
    }

    async create(item: DeepPartial<Entity>): Promise<Entity> {
        return await this.repository.save(item);
    }

    async update(id: number, item: QueryDeepPartialEntity<Entity>): Promise<void> {
        await this.repository.update(id, item);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }

    async findAll(): Promise<Entity[]> {
        return await this.repository.find();
    }

    async findById(id: any): Promise<Entity | undefined> {
        return await this.repository.findOne({ where: { id: id } as FindOptionsWhere<Entity> });
    }
}
