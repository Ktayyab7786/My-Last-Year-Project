# Simple Ecommerce Web Application

Beginner-friendly ecommerce app using React, Express, Sequelize, MySQL, and Tailwind CSS.

## Folder Structure Changes

- `backend/middleware/authMiddleware.js` - simple user-id header authentication
- `backend/middleware/roleMiddleware.js` - buyer/seller route protection
- `backend/seeders/productSeeder.js` - seeds 18 sample products
- `frontend/src/pages/SellerDashboard.jsx` - seller product management
- `frontend/src/pages/Checkout.jsx` - four-step fake payment checkout
- `frontend/src/pages/Orders.jsx` - buyer order history

## Main Features

- Buyers can view products, add items to cart, checkout, and view orders.
- Sellers can add, update, delete, and view their own products.
- Registration supports `buyer` and `seller` roles.
- Checkout has UI-only payment steps for COD, UPI, and card.
- Orders save `userId`, `totalAmount`, and `paymentMethod`.

## Backend Routes

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/products`
- `GET /api/products/:id`
- `GET /api/products/seller/my-products` seller only
- `POST /api/products` seller only
- `PUT /api/products/:id` seller only
- `DELETE /api/products/:id` seller only
- `POST /api/cart/add` buyer only
- `GET /api/cart/:userId` buyer only
- `DELETE /api/cart/remove/:id` buyer only
- `POST /api/orders/create` buyer only
- `GET /api/orders/:userId` buyer only

## Steps To Run

1. Create a MySQL database.

```sql
CREATE DATABASE ecommerce_db;
```

2. Add your backend `.env`.

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=ecommerce_db
DB_USER=root
DB_PASS=your_password
PORT=5000
```

3. Install and run the backend.

```bash
cd backend
npm install
npm run dev
```

4. Seed products manually if needed.

```bash
cd backend
npm run seed:products
```

5. Install and run the frontend.

```bash
cd frontend
npm install
npm run dev
```

Backend runs on `http://localhost:5000`.
Frontend runs on `http://localhost:5173`.

## Note

This app keeps authentication simple for learning. It sends `x-user-id` from the frontend and checks the user in the database. Use JWT or sessions for a real production app.
