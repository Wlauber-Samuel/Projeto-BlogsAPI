const express = require('express');
const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');
const categoryController = require('./controllers/categoryController');
const BlogPostController = require('./controllers/BlogPostController');
const tokenValidation = require('./middlewares/tokenValidation');
const { validateUser } = require('./middlewares/userLogin');
const { InputValidate, categoryIdsValidate } = require('./middlewares/BlogPostValidate');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', loginController.loginUser);

app.post('/user', validateUser, userController.createUser);

app.get('/user', tokenValidation, userController.getAllUsers);

app.get('/user/:id', tokenValidation, userController.getUserById);

app.post('/categories', tokenValidation, categoryController.createCategory);

app.get('/categories', tokenValidation, categoryController.getAllCategories);

app.post(
  '/post',
  tokenValidation,
  InputValidate,
  categoryIdsValidate,
  BlogPostController.createPost,
);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
