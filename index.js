const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.set('useNewUrlParser', true);   
mongoose.set('useFindAndModify', false); 
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://integralz:wnstjr12@cluster0.h9voc.mongodb.net/internet_board?retryWrites=true&w=majority');
const db = mongoose.connection; 

app.use(express.static(__dirname + '/public'));

db.once('open', function(){
  console.log('DB connected');
});

db.on('error', function(err){
  console.log('DB ERROR : ', err);
});

const port = 3000;
app.listen(port, function(){
    console.log('server on!' + port);
});