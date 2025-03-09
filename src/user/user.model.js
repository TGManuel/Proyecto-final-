import { Schema,model } from "mongoose";

const UserSchema = Schema({
    username:{
        type:String,
        required:[true,'El nombre de usuario es necesesario']
    },
    email:{
        type:String,
        required:[true,'El email es necesesario'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'La contraseña es necesesario']
    },
    compras:[],
    role:{
        type:String,
        enum:['admin','client'],
        default:'client'
    },
    estado:{
        type:Boolean,
        default:true
    }
})

UserSchema.methods.toJSON = function() {
    const {__v,password,_id,...user} = this.toObject()
    user.uid = _id
    return user
}

export default model('User',UserSchema)