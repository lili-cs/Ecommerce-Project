const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const { loginController } = require('./controller/loginController');
const { signupController } = require('./controller/signupController');
const { productController } = require('./controller/productController');


// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
const publicFolder = path.join(__dirname, 'public');
app.use(express.static(publicFolder));

app.use(signupController);
app.use(loginController);
app.use(productController);
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', async (req, res) => {
  res.sendFile('home.html', {root: publicFolder});
});

module.exports = app;