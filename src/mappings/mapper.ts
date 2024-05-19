import { createMapper, MappingProfile, createMap } from '@automapper/core';
import { classes } from '@automapper/classes';
import { CreateProductDto, UpdateProductDto } from '../dtos/product/ProductDto';
import { Product } from '../models/Product';

const mapper = createMapper({
  strategyInitializer: classes(),
});

createMap(mapper, CreateProductDto, Product);
createMap(mapper, UpdateProductDto, Product);

export { mapper };