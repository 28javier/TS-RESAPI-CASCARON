import Role from '../interface/rol.models';
import Usuario from '../interface/usuario.models';
import { Request, Response } from 'express';


export const esRolValido = async (rol ='') => {
    const existeRol = await Role.findOne({rol});
    if (!existeRol) {
     throw new Error(`El rol ${rol} no esta registrado en la BDD`);
    }
}

/**Validaciones Usuarios */

export const existeEmail = async (email = '') => {
    const emailValido = await Usuario.findOne({ email });
    if (emailValido) {
     throw new Error(`El email ${email} ya esta registrado, intenta con otro email !`);
    }
} 
         
 export const nicknameExiste = async (nickname ='') =>{
    const existeNickname = await Usuario.findOne({ nickname });
    if (existeNickname) {
        throw new Error(`El nickname ${nickname} ya esta registrado, intenta con otro nickname !`);
    }
}
 
export const idExiste = async ( id: string|number ) =>{
    const existeId = await Usuario.findById( id );
    if ( !existeId ) {
        throw new Error(`El id ${id} no se encuentra en la BDD no existe`);
    }
}


/**Fin Validaciones Usuarios */
    
    
    // export default {esRolValido, existeEmail};