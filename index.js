const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser'); 
const app = express();

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://integralz:wnstjr12@cluster0.h9voc.mongodb.net/internet_board?retryWrites=true&w=majority');
const db = mongoose.connection;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const contactschema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String },
    phone: { type: String }
});

const contact = mongoose.model('contact', contactschema);

db.once('open', function () {
    console.log('DB connected');
});

db.on('error', function (err) {
    console.log('DB ERROR : ', err);
});

app.get('/', function(req,res){
    res.redirect('/ejs');
});

const port = 3000;
app.listen(port, function () {
    console.log('server on!' + port);
});