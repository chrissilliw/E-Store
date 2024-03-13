const express = require('express');
const app = express();
const { router, computersRouter, mobilesRouter, televisionsRouter } = require('./routes');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({extended: true }));

app.use('/', router, computersRouter, mobilesRouter);

const port = process.env.PORT || 5005;
app.listen(port, () => console.log(`Listening on port ${port}`));