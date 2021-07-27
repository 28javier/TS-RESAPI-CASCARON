import { Schema, model } from 'mongoose';


const RoleSchema = new Schema({
    
    rol:{
        type:String,
        required: [true, 'El rol es obligatorio'],
        uniqued:true
    }
},
{
    timestamps: true,
    versionKey: false
});

export default model('Role', RoleSchema);