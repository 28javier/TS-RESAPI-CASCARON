import { Router } from "express";
import { check } from "express-validator";
import { deleteUsuario, getUsuario, getUsuarios, getUsuariosPaginados, postUsuario, updateUsuario } from "../controllers/usuario.controllers";
import { esRolValido, existeEmail, idExiste, nicknameExiste } from '../helpers/db-validaitor';
import validarCampos from '../middleware/validar-campos';

const router = Router();
router.get('/', getUsuarios);

router.get('/paginado', getUsuariosPaginados);

router.get('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(idExiste),
    validarCampos],
    getUsuario);


router.post('/', [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('nickname', 'El nickname es requerido').not().isEmpty(),
    check('nickname').custom(nicknameExiste),
    check('password', 'El password debe ser mayor a 6 digitos').isLength({ min: 6 }),
    check('email', 'El email no es válido').isEmail(),
    check('email').custom(existeEmail),
    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']), //Valida en duro el rol esta bien.
    check('rol').custom(esRolValido),
    validarCampos],
    postUsuario);

router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(idExiste),
    check('rol').custom(esRolValido),
    validarCampos],
    updateUsuario);

router.delete('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(idExiste),
    validarCampos],
     deleteUsuario);


export default router;