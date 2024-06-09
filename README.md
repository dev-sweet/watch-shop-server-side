# Watch shop server

## Brief Description
This project is a backend application built with Node.js and Express.js. It provides a robust API for managing a variety of resources, ensuring scalability and ease of maintenance. Key features include:

User authentication and authorization
CRUD operations for various resources
Data validation and sanitization
RESTful API design

## Main Features
- User Management: Allows for user registration, login, and profile management.
- Resource Management: Comprehensive CRUD operations for resources such as products, orders, and more.
- Authentication: Secure authentication using JWT.
- Error Handling: Centralized error handling mechanism.

## Instructions to Run the Project on Local Machine
Clone the repository:
`git clone https://github.com/dev-sweet/watch-shop-server-side` <br />
`cd watch-shop-server-side` <br />

***Install dependencies:***
`npm install` <br />
Set up environment variables: Create a .env file in the root directory and add the following variables:

makefile
PORT=3000
DB_USER=(your mongodb username)
DB_PASS=(your mongodb password)


Run the project:
Copy code
`npm start`
The server will start on http://localhost:3000.

Packages Used
"cors": "^2.8.5",
"dotenv": "^10.0.0",
"express": "^4.17.1",
"mongodb": "^4.1.4",
"nodemon": "^3.0.1"

Detailed Instructions
Setting Up the Database
Ensure you have MongoDB installed and running. You can use a service like MongoDB Atlas for a cloud-based solution. Update the DATABASE_URL in your .env file with your MongoDB connection string.


API Endpoints
User Endpoints
- POST /api/users/: Register an new user.
- GET /api/users/:email: Register an new user.
- PUT /api/users/admin/:email: Make an Admin.
- PUT /api/users/:id: Update an user.

Products Endpoints
- POST /api/products/: Addr a new product.
- GET /api/users/: Get All Products
- GET /api/users/:id: Get a product by id
- PUT /api/users/:id/: Update a product.
- Delete /api/users/:id: Delete a product.
- 
Orders Endpoints
- POST /api/orders/: Addr a new product.
- GET /api/orders/: Get All Products
- GET /api/orders/:email: Get orders by user id
- PUT /api/orders/:id/: Change pending status.
- Delete /api/orders/:id: Delete a order.
- 
Reviews Endpoints
- POST /api/orders/: Add a new review.
- GET /api/orders/: Get All Reviews.

Live Site Links
Production Site https://watch-shop-dece8.web.app/
Postman Documentation
You can find the full API documentation on Postman here.

Feel free to contribute to the project by opening issues or submitting pull requests. For major changes, please open an issue first to discuss what you would like to change.







