import { CreateProductDto, UpdateProductDto } from '../dtos/product/ProductDto';
import { Product } from '../models/Product';
import { mapper } from '../mappings/mapper';

export class ProductService {
  async getAll() {
    return await Product.findAll();
  }

  async getById(id: string) {
    return await Product.findByPk(id);
  }

  async create(productData: CreateProductDto) {
    console.log(productData);
    const product = mapper.map(productData, CreateProductDto, Product);
    console.log(product);

    return await Product.create(product.toJSON());
  }

  async update(id: string, productData: Partial<UpdateProductDto>) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }

    const updatedProduct = mapper.map(productData, UpdateProductDto, Product);
    return await product.update(updatedProduct.toJSON());
  }

  async delete(id: string) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }
    await product.destroy();
  }
}