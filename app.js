
import express from 'express';
import bookRoutes from './routes/bookRoutes.js';
import studentRoute from './routes/studentRoute.js';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default route
app.get('/', (req, res) => {
    res.status(200).send('Backend Server is Running!');
});

// API Routes
app.use('/api/books', bookRoutes);
app.use('/api/students', studentRoute);

// Handle undefined routes
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.method} ${req.originalUrl} not found`
    });
});

// Server
app.listen(port, () => {
    console.log(`Listening to port ${port}...`);
});
