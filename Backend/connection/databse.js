//Backend\connection\databse.js
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();

// const mongo_uri = process.env.MONGO_URI;

// export const connectDB = async () => {
//     try {
//         await mongoose.connect(mongo_uri);
//         console.log('Successfully connected to db');
//     } catch (error) {
//         console.log('Failed to connect to db');
//     }
// }

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongo_uri = process.env.MONGO_URI;

export const connectDB = async () => {
    try {
        await mongoose.connect(mongo_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Successfully connected to the database');
    } catch (error) {
        console.error('Failed to connect to the database:', error.message);
        process.exit(1); // Exit the process if the database connection fails
    }
};
