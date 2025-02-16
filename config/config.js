const mongoose = require('mongoose');
require('dotenv').config();

// Conexión a MongoDB
const dbConnection = async () => {
    try {
        await mongoose.connect (process.env.MONGO_URI);
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error conectando a MongoDB: ', error);
        throw new Error('Error conectando a MongoDB');
    }
}

module.exports = {dbConnection};  // exporto el objeto dbConnection