const express = require('express');
const { sequelize} = require ('./models');
const authRoutes = require ('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();
const app = express();

//Body parser middleware to parse incoming JSON requests

app.use(express.json());

//Use the auth route routes for `api/auth`
app.use('/api/auth', authRoutes);
app.use('/api', productRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
})



