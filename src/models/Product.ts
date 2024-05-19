import { Table, Column, Model, DataType, PrimaryKey, Default, HasMany } from 'sequelize-typescript';
import { AutoMap } from '@automapper/classes';
import { Variant } from './Variant';

@Table({
    tableName: 'products'
})
export class Product extends Model<Product> {
    @AutoMap()
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    id!: string;
    @AutoMap()
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @AutoMap()
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description!: string;

    @AutoMap()
    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
    })
    price!: number;

    @AutoMap()
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 1,
    })
    inventory!: number;

    @HasMany(() => Variant)
    variants!: Variant[];
}