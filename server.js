require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const { initializeModels } = require('./models');
const { seedProducts } = require('./seeders/productSeeder');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/orders');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
    res.send({ message: 'Simple Ecommerce Backend is running' });
});

async function startServer() {
    try {
        await db.authenticate();
        initializeModels();
        // Good for this learning project: updates tables when models change.
        await db.sync({ alter: true });
        await seedProducts();
        console.log('Database connected and models synced');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

startServer();
