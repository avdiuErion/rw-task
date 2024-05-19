import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';
import { BaseProductDto, CreateProductDto, UpdateProductDto } from '../dtos/product/ProductDto';

export class ProductController {
    private productService = new ProductService();

    async getAll(req: Request, res: Response) {
        const products = await this.productService.getAll();

        return res.json(products);
    }

    async getById(req: Request, res: Response) {
        const product = await this.productService.getById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        return res.json(product);
    }

    async create(req: Request, res: Response) {
        try {
            const productData: CreateProductDto = req.body;
            const product = await this.productService.create(productData);

            return res.status(201).json(product);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(400).json({ message: 'An unknown error occurred' });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const productData: Partial<UpdateProductDto> = req.body;
            const product = await this.productService.update(req.params.id, productData);

            return res.json(product);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(400).json({ message: 'An unknown error occurred' });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await this.productService.delete(req.params.id);

            return res.status(200).json({ message: 'Product successfully deleted!' });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(400).json({ message: 'An unknown error occurred' });
        }
    }
}
