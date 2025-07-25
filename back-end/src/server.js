import express from 'express';
import userRoutes from './routes/userRoutes.js'
import taskRoutes from './routes/taskRoutes.js'

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(taskRoutes);

app.listen(3000)

console.log('API iniciada.');