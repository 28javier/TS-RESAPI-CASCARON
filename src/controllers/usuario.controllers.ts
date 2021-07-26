import { Request, Response } from "express";



export const getUsuarios = (req: Request, res: Response)=> {
    res.json({
        message: 'Todos los Usuarios'
    });
}


export const getUsuario = (req: Request, res: Response)=> {
    const {id} = req.params;
    res.json({
        message: 'Usuario por id',
        id
    });
}

export const postUsuario = (req: Request, res: Response)=> {
    const {body} = req;
    res.json({
        message: 'Post Usuario',
        body
    });
}

export const updateUsuario = (req: Request, res: Response)=> {
    const {id} = req.params;
    const {body} = req;
    res.json({
        message: 'Update Usuario',
        id,
        body
    });
}

export const deleteUsuario = (req: Request, res: Response)=> {
    const {id} = req.params;
    res.json({
        message: 'Delete Usuario',
        id
    });
}
