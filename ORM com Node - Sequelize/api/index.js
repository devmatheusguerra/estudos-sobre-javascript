import express from 'express';
import routes from './routes/index.cjs';
const app = express();
const port = 3000;
routes(app);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    }
);