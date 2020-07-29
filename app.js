const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({defaultLayout: ''}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const admin = require('./routes/admin-routes');

app.use('/', admin);

app.listen(3000, () => {

    console.log('App is litening on 3000');

});