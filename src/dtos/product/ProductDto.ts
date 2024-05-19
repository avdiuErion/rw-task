import { AutoMap } from '@automapper/classes';

export class BaseProductDto {
    @AutoMap()
    description!: string;

    @AutoMap()
    price!: number;
}

export class CreateProductDto extends BaseProductDto{
    @AutoMap()
    name!: string;
}

export class UpdateProductDto extends BaseProductDto{
    
}