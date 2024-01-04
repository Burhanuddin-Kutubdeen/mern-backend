const mongoose = require('mongoose');
const matrimonyProfileSchema = new mongoose.Schema({
    // creator : {
    //     type:String,
    //     required:true
    // },
    firstName : {
        type:String,
        required:true
    },
    lastName : {
        type:String,
        required:true
    }
    // number : {
    //     type:String,
    //     required:true
    // },
    // email : {
    //     type:String,
    //     required:true
    // },
    // gender : {
    //     type:String,
    //     required:true
    // },
    // day : {
    //     type:String,
    //     required:true
    // },
    // month : {
    //     type:String,
    //     required:true
    // },
    // year : {
    //     type:String,
    //     required:true
    // },
    // Ft : {
    //     type:String,
    //     required:true
    // },
    // In : {
    //     type:String,
    //     required:true
    // },
    // maritalStatus : {
    //     type:String,
    //     required:true
    // },

})
const Registration = new mongoose.model("Dosflamingo",matrimonyProfileSchema);
module.exports = Registration;