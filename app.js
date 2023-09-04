import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import MenuController from './MenuController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use('/js', express.static(`${__dirname}/js`));
app.use('/assets', express.static(`${__dirname}/assets`));
app.use('/', MenuController);

app.get('/', (_, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
