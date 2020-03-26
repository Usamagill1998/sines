const Joi = require('joi');
const mongoose = require('mongoose');
 
const Area = mongoose.model('Area', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
     polygon: [{
        
        lat : String,
        lng : String
         }]
    // timestamps: true
    // polygon .. aray lat long
}));
 
function validateArea(area) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        polygon: Joi.required()
    };
    return Joi.validate(area, schema);
}
 
exports.Area = Area;
exports.validate = validateArea;
