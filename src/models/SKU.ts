import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, Default } from 'sequelize-typescript';
import { AutoMap } from '@automapper/classes';
import { Variant } from './Variant';

@Table({
  tableName: 'skus',
  timestamps: false,
})
export class SKU extends Model<SKU> {
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
    type: DataType.INTEGER,
    allowNull: false,
  })
  stock!: number;

  @ForeignKey(() => Variant)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  variantId!: string;

  @BelongsTo(() => Variant)
  variant!: Variant;
}
