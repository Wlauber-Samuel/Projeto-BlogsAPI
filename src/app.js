const express = require('express');
const loginController = require('./controllers/loginController');
const userController = require('./controllers/userController');
const { validateUser } = require('./middlewares/userLogin');
const tokenValidation = require('./middlewares/tokenValidation');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', loginController.loginUser);

app.post('/user', validateUser, userController.createUser);

app.get('/user', tokenValidation, userController.getAllUsers);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
// first commit