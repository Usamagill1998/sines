const Joi = require('joi');
const mongoose = require('mongoose');
 
const Customer = mongoose.model('Customer', new mongoose.Schema({
   
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
 
function validateCustomer(customer) {
    const schema = {
        //firstname: Joi.string().min(5).max(50).required(),
        name: Joi.string().min(1).max(50).required(),
        phone: Joi.number().required()
    };
    return Joi.validate(customer, schema);
}
 
exports.Customer = Customer;
exports.validate = validateCustomer;
