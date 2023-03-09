let  weather = require('weather-js');
const {find} = require("weather-js");

// Options:
// search:     location name or zipcode
// degreeType: F or C

let weatherk =  (city,fn )=>{

    let  a=   weather.find({search: city, degreeType: 'C'}, (err, result)=> {
        if(err) console.log(err);
        // let c = await JSON.stringify(result);
        fn(result)
    // console.log(a)
        // console.log(result[0].location.name)
        // console.log(result)
        // console.log(JSON.stringify(result, null, 2));
});

}
// let c2 = weatherk('Jodhpur' ,function (location){
//     console.log(location)
// })
// console.log(c2)
module.exports = {weatherk};
