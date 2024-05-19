import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { Product } from '../models/Product';
import { Variant } from '../models/Variant';
import { SKU } from '../models/SKU';
dotenv.config();

const { CONNECTION_STRING } = process.env;

if (!CONNECTION_STRING) {
    throw new Error("Missing CONNECTION_STRING environment variable");
}

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    logging: false,
    models: [Product, Variant, SKU],
});

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
        await sequelize.sync({ alter: true });
        console.log("Database synchronized");
    } catch (error) {
        console.error("Error synchronizing database:", error);
    }
};