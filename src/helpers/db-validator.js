import Role from "../role/role.model.js"
import User from "../user/user.model.js"

export const isValidRole = async (role='') => {
    const existRole = Role.findOne({role})

    if (!existRole) {
        return new Error(`El role: ${role} No existe.`)
    }
}

export const existEmail = async (email='') => {
    const existeEmail = await User.findOne({email})

    if (!existeEmail) {
        return new Error(`Este correo: ${email} ya existe en la base de datos.`)
    }
}

export const existentUserById = async (id='') => {
    const userExist = await User.findById(id)

    if (!userExist) {
        throw new Error(`El ID ${id} no existe`)
    }
}