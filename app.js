const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({defaultLayout: ''}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

    res.render('index');

});

app.listen(3000, () => {

    console.log('App is litening on 3000');

});