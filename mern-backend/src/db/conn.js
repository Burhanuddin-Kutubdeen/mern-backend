const mongoose = require ("mongoose");
mongoose.connect("mongodb+srv://Dosflamingo:APSSGM2uxJ30NChU@dosflamingo.epyvpyu.mongodb.net/?retryWrites=true&w=majority",{

}).then(() =>{
    console.log("connected");
})
