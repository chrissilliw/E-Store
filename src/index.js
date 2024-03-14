const express = require('express');
const app = express();
const { router, computersRouter, mobilesRouter, televisionsRouter, audiosRouter } = require('./routes');
require('dotenv').config();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.urlencoded({extended: true }));
app.use(express.json());

app.use('/', router, computersRouter, mobilesRouter, televisionsRouter, audiosRouter);

const port = process.env.PORT || 5005;
app.listen(port, () => console.log(`Listening on port ${port}`));