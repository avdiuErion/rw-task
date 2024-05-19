# E-commerce Backend Application

## Overview
This is a backend application for a simple e-commerce platform built using TypeScript, PostgreSQL, Sequelize ORM, and Express.js. The application follows the MVC architecture and supports CRUD operations for products, including variants and SKUs.

## Features
- CRUD operations for products
- PostgreSQL for data storage
- Sequelize ORM for database interactions
- Express.js for handling HTTP requests
- Environment variable management with `dotenv`

## Prerequisites
- Node.js (v14 or higher)
- PostgreSQL

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/avdiuErion/rw-task.git
    cd rw-task
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Set up environment variables**
    Create a `.env` file in the root of the project and add the following variables:
    ```env
    CONNECTION_STRING=postgres://postgres.cmcqjsvejpptqefvtzev:2v0fBNQOnbzp3Bi6@aws-0-eu-central-1.pooler.supabase.com:5432/postgres
    PORT=5000
    ```

## Running the Application

1. **Development**
    ```bash
    npm start
    ```

    This will start the application, with the communcation to the Postgres provider for storage.

## API Endpoints

### Products

- **GET /api/products**
    - Retrieves a list of all products.
    - Example response:
        ```json
        [
            {
                "id": "uuid",
                "name": "Sample Product",
                "description": "This is a sample product.",
                "price": 99.99,
                "inventory": 10,
                "variants": [
                    {
                        "id": "uuid",
                        "size": "M",
                        "color": "Red",
                        "skus": [
                            {
                                "id": "uuid",
                                "stock": 10
                            }
                        ]
                    }
                ]
            }
        ]
        ```

- **GET /api/products/:id**
    - Retrieves a specific product by ID.
    - Example response:
        ```json
        {
            "id": "uuid",
            "name": "Sample Product",
            "description": "This is a sample product.",
            "price": 99.99,
            "inventory": 10,
            "variants": [
                {
                    "id": "uuid",
                    "size": "M",
                    "color": "Red",
                    "skus": [
                        {
                            "id": "uuid",
                            "stock": 10
                        }
                    ]
                }
            ]
        }
        ```

- **POST /api/products**
    - Creates a new product.
    - Example request body:
        ```json
        {
            "name": "Sample Product",
            "description": "This is a sample product.",
            "price": 99.99,
            "variants": [
                {
                    "size": "M",
                    "color": "Red",
                    "skus": [
                        {
                            "stock": 10
                        }
                    ]
                }
            ]
        }
        ```

- **PUT /api/products/:id**
    - Updates an existing product by ID.
    - Example request body:
        ```json
        {
            "description": "This is an updated product.",
            "price": 89.99,
            "variants": [
                {
                    "size": "L",
                    "color": "Blue",
                    "skus": [
                        {
                            "stock": 5
                        }
                    ]
                }
            ]
        }
        ```

- **DELETE /api/products/:id**
    - Deletes a product by ID.
