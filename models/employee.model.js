const mongoose = require('mongoose');

let employeeSchema = new mongoose.Schema({
    fullName : {
        type: String,
        required: 'This field is required.'
    },
    email : {
        type: String
    },
    phone : {
        type: String
    },
    city : {
        type: String
    }
});

// custom validation for email
employeeSchema.path('email').validate(val=>{
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(val);
}, 'Invalid Email');

mongoose.model('Employee', employeeSchema);