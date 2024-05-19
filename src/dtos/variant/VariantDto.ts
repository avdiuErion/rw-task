import { AutoMap } from "@automapper/classes";
import { Type } from "class-transformer";
import { IsArray, ValidateNested } from "class-validator";
import { SKUDto } from "../sku/SKUDto";

export class VariantDto {
    @AutoMap()
    size!: string;

    @AutoMap()
    color!: string;

    @AutoMap()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SKUDto)
    skus: SKUDto[] = [];
}