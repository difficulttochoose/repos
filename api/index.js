const express = require('express');
const app = require('./server');

const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');
const authRouter = require('./routes/auth');

const port = process.env.API_PORT || 3000;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/users',usersRouter);
app.use('/api/orders',ordersRouter);
app.use('/api/auth',authRouter);


app.listen(port, () => {
    console.log(`App has been loaded on port ${port}`);
});
