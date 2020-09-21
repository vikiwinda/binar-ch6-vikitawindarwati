const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');

//set up port + express
const app = express();
const PORT = 8000;

//reading json body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: false } ))


app.use(methodOverride('_method'));
//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routes
app.use(routes);

//listen
app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`)
})