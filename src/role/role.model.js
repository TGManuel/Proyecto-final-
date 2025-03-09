import mongoose from "mongoose";

const RoleSchema = mongoose.Schema({
    role:{
        type: String,
        required: [true,'El rol es indispensable']
    }
})

export default mongoose.model('Role',RoleSchema)