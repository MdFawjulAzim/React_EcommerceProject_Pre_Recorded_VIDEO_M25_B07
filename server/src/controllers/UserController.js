const {UserOTPService,VerifyOTPService,SaveProfileService,ReadProfileService} = require('../services/UserServices.js');


exports.UserOTP = async(req,res)=>{
    let result = await UserOTPService(req);
    return res.status(200).json(result);
}

exports.VerifyLogin = async(req,res)=>{
    let result = await VerifyOTPService(req);
    if(result.status === "success"){
        //Cookies Set 
        let cookieOption ={
            expires: new Date(Date.now() + 24 * 60*60 * 1000),
            httpOnly: false
        }
        //Set the cookie with Response
        res.cookie('token', result.token, cookieOption);
        return res.status(200).json(result);
    }else{
        return res.status(200).json(result);
    }
}

exports.UserLogout = async(req,res)=>{
    //Cookies destroy 
    let cookieOption ={
        expires: new Date(Date.now() - 24 * 60*60 * 1000),
        httpOnly: false
    }
    //Set the cookie with Response
    res.cookie('token',"", cookieOption);
    return res.status(200).json({status:"success", message:"User logged out successfully."});
}

exports.CreateProfile = async(req,res)=>{
    let result = await SaveProfileService(req);
    return res.status(200).json(result);
}

exports.UpdateProfile = async(req,res)=>{
    let result = await SaveProfileService(req);
    return res.status(200).json(result);
}

exports.ReadProfile= async(req,res)=>{
    let result = await ReadProfileService(req);
    return res.status(200).json(result);
}