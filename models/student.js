import mongoose from 'mongoose';

const studentSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    year:{
        type:Number,
        required:true
    }
});

export default mongoose.model('Student',studentSchema);