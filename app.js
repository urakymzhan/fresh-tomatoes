const express = require('express')
const app = express();
const exphbs = require('express-handlebars');

var hbs = exphbs.create({
    defaultLayout: 'main',
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})