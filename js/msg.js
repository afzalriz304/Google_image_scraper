var express=require('express');
var bodyParser = require('body-parser');
var app=express();
var fs = require('fs');



//connected to mongoose
var mongoose  = require('mongoose');
mongoose.connect("mongodb://localhost:27017/googleSearch")
require('./models/SearchedData')

mongoose.connection.on("connected",function(){
  console.log('connection Successfull')
})
mongoose.connection.on("error",function(err){
  if(err)
    console.log('connection error')
})

var searchedData  = mongoose.model('searchedData');


//image-scraper
var Scraper = require ('images-scraper')
  , google = new Scraper.Google();


app.use(bodyParser.json());
var urlencodedParser	=	bodyParser.urlencoded({extended: true})
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))





app.post('/getImages',urlencodedParser,function(req,res){
  console.log("inside of getImages",req.query.image);
  var result;
  google.list({
    keyword: req.query.image,
    num: 15
  })
  .then(function (data) {

    var searchData  = {
      key:req.query.image,
      data:data
    }

    var now = new Date();
    var search  = searchedData({
      'keyword':req.query.image,
      'data':data,
      'time':now
    })

    search.save(function(err,search_data){
      res.send(search_data);
    })

    
  }).catch(function(err) {
      console.log('err', err);
  });
})

app.get('/getSearchData',function(req,res){
  searchedData.find({}).exec(function(err,db_data){
    if(err){

    }else{
      res.send(db_data);
    }
  })
})


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
