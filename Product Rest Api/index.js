import express from 'express';
import products from './product.json' with { type: 'json' };

const app = express();

app.use(express.json());

// GET all products
app.get('/products', (req, res) => {
    res.json(products);
});

// GET one product
app.get('/products/:id', (req, res) => {
    const product = products.find(
        p => p.id == req.params.id
    );

    if (!product) {
        return res.status(404).send("Product not found");
    }

    res.json(product);
});

// POST
app.post('/products', (req, res) => {

    const product = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price,
        category: req.body.category
    };

    products.push(product);

    res.json(product);
});

// Server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});