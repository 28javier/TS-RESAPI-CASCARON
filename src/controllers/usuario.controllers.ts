import { Request, Response } from "express";
import bcryptjs from 'bcryptjs';
import Usuario from '../interface/usuario.models';



export const getUsuarios = async (req: Request, res: Response) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hablar con el administrador'
        });
    } const usuarios = await Usuario.find({ condition: true });
    res.status(200).json({
        msg: 'Todos los Usuarios',
        usuarios
    });
}



export const getUsuario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findById(id);
        res.status(200).json({
            msg: `Usuario con el ${id}`,
            usuario
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hablar con el administrador'
        });
    }
}


export const getUsuariosPaginados = async (req: Request, res: Response) => {

    try {
        // console.log(req.query);
        const limit = Number(req.query.limit) || 10;
        const page = Number(req.query.page) || 1;
        const usuarioPaginado = await Usuario.paginate({ condition: true }, { limit, page });
        res.status(200).json({
            msg: 'Usuarios Paginado',
            usuarioPaginado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hablar con el administrador'
        });
    }
}


export const postUsuario = async (req: Request, res: Response) => {
    try {
        // const body = req.body;
        const { name, email, password, rol, nickname } = req.body; //Lo que se enviara obligatorio a crear
        // const usuario = new Usuario(body)
        const usuario = new Usuario({ name, email, password, rol, nickname });
        // Encriptar la clave
        const salt = bcryptjs.genSaltSync(10);
        usuario.password = bcryptjs.hashSync(password, salt);
        // Guardar en BDD
        await usuario.save();
        res.status(200).json({
            ok: true,
            msg: 'Usuario creado correctamente',
            usuario
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hablar con el administrador'
        });
    }
}

export const updateUsuario = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;
        // se destructura informacion que no se debe editar
        const { _id, password, google, email, nickname, ...restoData } = req.body;

        //TODO: Validar contrase;a contra la bdd
        if (password) {
            const salt = bcryptjs.genSaltSync(10);
            restoData.password = bcryptjs.hashSync(password, salt);
        }
        const usuario = await Usuario.findByIdAndUpdate(id, restoData, { new: true })
        res.status(200).json({
            msg: 'Update Usuario Correctamente',
            usuario
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hablar con el administrador'
        });
    }
}

export const deleteUsuario = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByIdAndUpdate(id, {condition: false})
        res.json({
            msg: 'Usuario Eliminado Correctamente',
            usuario
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hablar con el administrador'
        });
    }
}
