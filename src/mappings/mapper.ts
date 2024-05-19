import { createMapper, createMap } from '@automapper/core';
import { classes } from '@automapper/classes';
import { CreateProductDto, UpdateProductDto } from '../dtos/product/ProductDto';
import { Product } from '../models/Product';
import { Variant } from '../models/Variant';
import { VariantDto } from '../dtos/variant/VariantDto';
import { SKUDto } from '../dtos/sku/SKUDto';
import { SKU } from '../models/SKU';

const mapper = createMapper({
  strategyInitializer: classes(),
});

createMap(mapper, CreateProductDto, Product);
createMap(mapper, UpdateProductDto, Product);
createMap(mapper, VariantDto, Variant);
createMap(mapper, SKUDto, SKU);

export { mapper };