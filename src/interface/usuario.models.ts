
import { Schema, model } from 'mongoose';
import mongoosePaginate  from 'mongoose-paginate-v2';

const UsuarioSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    nickname: {
        type: String,
        required: [true, 'El nickname es obligatorio'],
        uniqued: true
    },

    email: {
        type: String,
        required: [true, 'El email es obligatorio'],
        uniqued: true
    },

    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    },

    image: {
        type: String,
    },

    rol: {
        type: String,
        required: true,
        // enum: ['ADMIN_ROLE', 'USER_ROLE', 'VENTA_ROLE']
    },

    condition:{
        type: Boolean,
        default: true
    },

    google:{
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false,
});

// Validar para que no se muestre la clave en la peticion
// UsuarioSchema.methods.toJSON = function () {
//     const { password, ...dataUser} = this.toObject();
//     return dataUser;
// }

UsuarioSchema.plugin(mongoosePaginate);

export default model('Usuario', UsuarioSchema);