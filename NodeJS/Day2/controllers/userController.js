const { trusted } = require('mongoose');
const User = require('../models/userModel')
const getUsers = async(req,res)=> {
    try{
        const output = await User.find();
        res.status(200).send(output)
    } catch(error){
        res.status(500).send({'msg':'getting error '+ error.message})
    }
}

const createdUser = async(req,res) =>{
    try{
        const{name,email,age} = req.body

        const user = new User({name,email,age})
        const output = await user.save()
        res.status(201).send(output)

    } catch(error){
        res.status(500).send({'msg':'getting error '+ error.message})
    }
}

const getUserById = async(req,res) => {
    try{
        const user = await User.findById(req.params.id)
        res.status(201).json(user)
    }catch(error){
        res.status(404).send({'msg':'User Not Found '+ error.message})
    }

}

const updateUser = async(req,res) => {
    try{
        const {name,email,age} = req.body;
        const user = await User.findByIdAndUpdate(req.params.id,{name,email,age},{ new:true ,
            runValidators : true })
        res.status(201).json(user)
    }catch(error){
        res.status(500).send({'msg':'Error in updating '+ error.message})
    }


}

const deleteUser = async(req,res) => {
    try{
        const {name,email,age} = req.body;
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(201).json({message:'User Deleted Successfully'})
    }catch(error){
        res.status(404).send({'msg':'User Not Found '+ error.message})
    }

}

module.exports = {
    getUsers,
    createdUser,
    getUserById,
    updateUser,
    deleteUser,
}