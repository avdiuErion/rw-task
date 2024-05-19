import { AutoMap } from '@automapper/classes';
import { IsOptional, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { VariantDto } from '../variant/VariantDto';


export class BaseProductDto {
    @AutoMap()
    description!: string;

    @AutoMap()
    price!: number;

    @AutoMap()
    inventory!: number;

    @AutoMap()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => VariantDto)
    @IsOptional()
    variants?: VariantDto[];
}

export class CreateProductDto extends BaseProductDto {
    @AutoMap()
    name!: string;
}

export class UpdateProductDto extends BaseProductDto {

}