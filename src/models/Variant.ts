import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, Default, HasMany } from 'sequelize-typescript';
import { AutoMap } from '@automapper/classes';
import { Product } from './Product';
import { SKU } from './SKU';

@Table({
  tableName: 'variants',
  timestamps: false,
})
export class Variant extends Model<Variant> {
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
  size!: string;

  @AutoMap()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  color!: string;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  productId!: string;

  @BelongsTo(() => Product)
  product!: Product;

  @HasMany(() => SKU)
  skus!: SKU[];
}
