import express from 'express';
import bodyParse from 'body-parser';
import usersRoutes from './routes/users.js';


const app = express();
const PORT = 5000;

app.use(bodyParse.json());

app.use('/users', usersRoutes)

app.get('/', (req, res) => res.send('HEllo from Homepage.'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost${PORT}`));



