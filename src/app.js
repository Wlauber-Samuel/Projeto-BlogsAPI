const express = require('express');
const loginController = require('./controllers/loginController');
const userController = require('./controllers/userController');
const { validateUser } = require('./services/userService');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', loginController.loginUser);

app.post('/user', validateUser, userController.createUser);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
// first commit