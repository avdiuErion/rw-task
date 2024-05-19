import { AutoMap } from "@automapper/classes";

export class SKUDto {
    @AutoMap()
    stock!: number;
  }