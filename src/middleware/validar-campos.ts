import { validationResult } from 'express-validator';
import { Request, Response } from 'express';

const validarCampos = (req: Request, res: Response, next: () => void) =>{
    
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
        return res.status(400).json(erros);
    }
    next();
}




export default validarCampos;