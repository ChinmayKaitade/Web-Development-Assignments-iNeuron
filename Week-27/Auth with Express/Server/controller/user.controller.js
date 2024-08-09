const { UserModel } = require("../model/User.model")
const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")
const JWT = require("jsonwebtoken")
const e = require("express")

// to register user
exports.userSignUp = async(req,res) => {
    try {
        const newUser=await UserModel.create(req.body);
        res.status(200).send({
            msg:"SignUp Success"
        })
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}

// to login user
exports.userLogin = async(req,res) => {
    const {username,password} = req.body;
    try {
        const getuserData=await UserModel.findOne({username}).select("+password");
        if(getuserData && getuserData.username ){
            const result= await bcrypt.compare(password,getuserData.password)
            if(result){

                const token = await getuserData.jwtToken()
                const cookieOption = {
                    maxAge: 24 * 60 * 60 * 1000, //24hr
                    
                    httpOnly: true //  not able to modify  the cookie in client side
                  };
              
                  res.cookie("token", token, cookieOption);
                  res.status(200).json({
                    success: true,
                    data: getuserData
                  });

            }else{
                res.status(404).send({msg:"Password is Incorrect, Try Again!"})
            }
        }else{  
            res.status(404).send({msg:"No Account Found Associated with this username"})
        }

        
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}


// get user Details

exports.getUserDetails = async(req,res) => {
    const {id,username} = req.user;

    try{
        const userData = await UserModel.findOne({username});
        res.status(200).send({
            msg:"Success",
            data:userData
        })

    }
    catch(err){
        res.status(501).send({msg:err.message})
    }

}