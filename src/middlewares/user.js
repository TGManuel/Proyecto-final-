import { hash } from "argon2";
import User from "../user/user.model.js"

export const canUpdateUser = async (req, res, next) => {
    const { id } = req.params;
    const {password,...data} = req.body
    if (req.user.role === 'client' && id !== req.user._id.toString()) {
        return res.status(403).json({
            message: "No tienes permitido realizar esta acción."
        });
    }

    const user = await User.findById(id)
            if (!user) {
                return res.status(404).json({
                    message: "Ususario no encontrado"
                })
            }

    if (password) {
        data.password = await hash(password)
    }

    next(); 
};

export const canDeleteUser = async (req, res, next) => {
    const {id} = req.params
    const {confirm} = req.body
    
    if (req.user.role !== 'admin' && id !== req.user._id.toString()) {
        return res.status(403).json({
            message: "No tienes permitido realizar esta acción."
        })
    }

    if (!confirm) {
        return res.status(400).json({
            message: "¿Estas seguro de querer eliminar tu cuenta?, Envía un valor 'true' para confirmar"
        })
    }

    const user = await User.findById(id)
    
            if (!user) {
                return res.status(404).json({
                    ss:false,
                    message: "El usuario que desea borrar no existe."
                })
            }

    next(); 
};