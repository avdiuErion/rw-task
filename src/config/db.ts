import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const { CONNECTION_STRING } = process.env;

if (!CONNECTION_STRING) {
    throw new Error("Missing CONNECTION_STRING environment variable");
}

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    logging: false,
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