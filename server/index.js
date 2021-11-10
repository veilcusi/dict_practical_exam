const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // middleware
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    // const sqlInsert = "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Gagamboy','good movie');"
    // db.query(sqlInsert, (err, result) =>{
        res.send("hello world");
    // });
})

app.get("/api/getParams",(req, res) => {
    var par = parseInt(req.query.id);
    var fruits = ["Mango", "Peach", "Grapes", "Strawberry", "Orange"];
    var vegetables = ["Broccoli", "Lettuce", "Carrot", "Potato", "Cabbage"];
    if(par === 0) res.send(JSON.stringify(["no data available"]));
    if(par === 1) res.send(JSON.stringify(fruits));
    if(par === 2) res.send(JSON.stringify(vegetables));
});

app.listen(3001, () => {
    console.log('running in port 3001');
});