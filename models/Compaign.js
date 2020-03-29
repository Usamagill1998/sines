const Joi = require('joi');
const mongoose = require('mongoose');
   
const Compaign = mongoose.model('Compaign', new mongoose.Schema({
    CompaignName: {
        type:String,
        required: true
      },
    
    timage: {
        type: String,
        required: true
      },
   
    price: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    startDate: {
        type:String,
        required: true
    },
    endDate: {
        type:String,
        required: true
    },  
    area: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Area',
        
        //required:true
    },
    numberOfCars: {
        type: Number,
        required: true   
    },
     



    // payment: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Payment'
    // },

    // notification: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Notification'
    // },
    
    // timestamps: true
}));
 
function validateCompaign(compaign) {
    const schema = {
        CompaignName:Joi.string().required(),
        timage:Joi.string().required(),
        price: Joi.number().required(),
        url: Joi.string().required(),
        startDate: Joi.string().required(),     
        endDate: Joi.string().required(),
        numberOfCars: Joi.number().required(),
        area:Joi.string().required(),
        postedBy:Joi.string().required()

    };
    return Joi.validate(compaign, schema);
}
 
exports.Compaign = Compaign;
exports.validate = validateCompaign;