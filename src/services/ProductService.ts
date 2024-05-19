import { CreateProductDto, UpdateProductDto } from '../dtos/product/ProductDto';
import { Product } from '../models/Product';
import { mapper } from '../mappings/mapper';
import { Variant } from '../models/Variant';
import { VariantDto } from '../dtos/variant/VariantDto';
import { SKU } from '../models/SKU';
import { SKUDto } from '../dtos/sku/SKUDto';

export class ProductService {
  async getAll() {
    return await Product.findAll({ include: { model: Variant, include: [SKU] } });
  }

  async getById(id: string) {
    return await Product.findByPk(id, { include: { model: Variant, include: [SKU] } });
  }

  async create(productData: CreateProductDto) {
    const product = mapper.map(productData, CreateProductDto, Product);

    const createdProduct = await Product.create(product.toJSON(), { include: [Variant] });

    if (productData.variants) {
      await this.createVariants(product.id, productData.variants);
    }

    return await this.getById(createdProduct.id);
  }

  async update(id: string, productData: Partial<UpdateProductDto>) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }

    await product.update(mapper.map(productData, UpdateProductDto, Product).toJSON());

    if (productData.variants) {
      await Variant.destroy({ where: { productId: id } });

      if (productData.variants) {
        await this.createVariants(product.id, productData.variants);
      }
    }
    return this.getById(id);
  }

  async delete(id: string) {
    const product = await Product.findByPk(id, { include: { model: Variant, include: [SKU] } });
    if (!product) {
      throw new Error('Product not found');
    }

    for (const variant of product.variants) {
      await SKU.destroy({ where: { variantId: variant.id } });
      await variant.destroy();
    }

    await product.destroy();
  }

  async createVariants(productId: string, variants: VariantDto[]) {
    for (const variantData of variants) {
      const variant = mapper.map(variantData, VariantDto, Variant);
      variant.productId = productId;
      const createdVariant = await Variant.create(variant.toJSON(), { include: [SKU] });

      if (variantData.skus) {
        await this.createSkus(createdVariant.id, variantData.skus);
      }
    }
  }

  async createSkus(variantId: string, skus: SKUDto[]) {
    for (const skuData of skus) {
      const sku = mapper.map(skuData, SKUDto, SKU);
      sku.variantId = variantId;
      await SKU.create(sku.toJSON());
    }
  }
}