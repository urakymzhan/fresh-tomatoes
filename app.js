const express = require('express')
const app = express();
const exphbs = require('express-handlebars');
const mongoose = require("mongoose");

// configs 
var hbs = exphbs.create({
    defaultLayout: 'main',
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// db connection

const mongoURI = "mongodb+srv://test-user:test123@tomatoes.thcnz.mongodb.net/test"
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongodb connect error: "));

// schema
const Review = mongoose.model("Review", {
    title: String,
    movieTitle: String,
});

// sample data

// let reviews = [
//     { title: "Great Review", movieTitle: "Batman II" },
//     { title: "Awesome Movie", movieTitle: "Titanic" }
// ]

// functions 

app.get('/', (req, res) => {
    Review.find().lean().then(reviews => {
        res.render('reviews-index', { reviews });
    })
    .catch(err => {
        console.log('err: ',err);
    })
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})