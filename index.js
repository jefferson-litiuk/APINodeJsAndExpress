import express from 'express';
import bodyParse from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParse.json());

app.listen(PORT, () => console.log(`Server running on port: http://localhost${PORT}`));



