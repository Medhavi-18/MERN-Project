import userModel from "../model/userModel.js";
import User from "../model/userModel.js";

//API CREATE

//1)CREATEING USER DATA
export const create = async(req, res)=>{
    
    try{
        //create user data
        const userData = new User(req.body);

        if(!userData){
            return res.status(404).json({msg: "User data not found"});
        }

        const savedeData = await userData.save();
        res.status(200).json({msg: "New User added Sucesssfully"});

    }catch(error){
        res.status(500).json({error : error});
    }
}


//2)FETCHING ALL DATA
export const getAll = async(req,res) => {
    try{

        //fetching all data
        const userData = await userModel.find();

        if(!userData){
            return res.status(404).json({msg: "Users data not found "});
        }

        //fetch data here
        res.status(200).json(userData);


    }catch(error){
        res.status(500).json({error : error});
    }
}

//3)FETCHING PARTICULAR DATA BY ID

export const getOne = async(req, res) =>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist){
            return res.status(404).json({msg: "User not found"});
        }
        res.status(200).json(userExist);

    }catch(error){
        res.status(500).json({error : error});
    }
}

//4)DATA UPDATE

export const update = async(req, res)=>{
    try{
        //update by its particular id
        const id = req.params.id;

        //if data exist in database
        const userExist = await User.findById(id);

        if(!userExist){
            return res.status(401).json({msg: "User not Found"});
        }
 
        //update data
        const updatedData = await User.findByIdAndUpdate(id, req.body, {new: true}); //return updated data
        res.status(200).json({msg: "User Updated Sucessfully"});


    }catch(error){
        res.status(500).json({error : error}); 
    }
}


//5)DELETE
export const deleteUser = async(req, res) =>{
    try{

        //delete by using id
        const id = req.params.id;

        //id exist or not
        const userExist = await User.findById(id);

        if(!userExist){
            return res.status(404).json({msg: "User Not Exist"});
        }

        await User.findByIdAndDelete(id);
        res.status(200).json({msg:"User Deleted Sucessfully"});
        

    }catch(error){
        res.status(500).json({error : error}); 
    }
}