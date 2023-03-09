const mongoose = require('mongoose');
const body = require('body-parser')


const express = require('express')
const {weatherk} = require('./weatherr')
const path = require('path')
const app = express()
const port = 3000
app.set('view engine', 'pug')// Set the template engine for pug
app.set('views' ,path.join(__dirname,'views'))
app.use(express.urlencoded())

app.get('/', (req, res) => {
    try{
    console.log(req.query.query)
    // var re ;
    let ck = weatherk(req.query.query ,function (location){
        // console.log(location)
        const re = {"country":location[0].location.name , "temparature" : location[0].current.temperature + 'C' , "feelslike" :location[0].current.feelslike,
        "important" : location[0].current.skytext}
        // console.log(location[1].current['temperature'])
        res.render('index.pug',re)
    } )}
    catch (error){
        res.render('index.pug')
    }



})

app.get('/contact', (req, res) => {
   res.sendFile(path.join(__dirname,'views/index.html'))


})
app.post('/contact', (req,res)=>{
    console.log(req.body.gmail)
    main().catch(err => console.log(err));
    async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/anaskhan');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
         }
    const kittySchema = new mongoose.Schema({
      name: String,
      Concern : String
    });
    const Data = mongoose.model('WeatherData', kittySchema);
    const Data1 = new Data({ name: req.body.gmail , Concern:req.body.concern});
    (async()=>{
        await  Data1.save();
        console.log("data is saved ")
    })();
   res.sendFile(path.join(__dirname,'views/index.html'))


})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})