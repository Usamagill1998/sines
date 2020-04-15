const Joi = require('joi');
const mongoose = require('mongoose');
 
const Drivers = mongoose.model('Drivers', new mongoose.Schema({
   
    name: { 
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },  
    phone: {   
        type: Number,
        required: true,
        // unique: true
    },

    // date: {
    //     type: Date,
    //     default: Date.now
    // }

    // paymentMethod: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Payment'
    // },

    // timestamps: true
}));
 
function validateDrivers(drivers) {
    const schema = {
        //firstname: Joi.string().min(5).max(50).required(),
        name: Joi.string().min(1).max(50).required(),
        phone: Joi.number().required()
    };
    return Joi.validate(drivers, schema);
}
 
exports.Drivers = Drivers;
exports.validate = validateDrivers;
