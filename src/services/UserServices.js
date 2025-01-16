const EmailSend = require("../utility/EmailHelper.js");
const UserModel = require("../models/UserModel.js");
const ProfileModel = require("../models/ProfileModel.js");
const { EncodeToken } = require("../utility/TokenHelper.js");

const UserOTPService=async(req)=>{
    try{
    let email=req.params.email;
    let code=Math.floor(100000 + Math.random() * 900000);
    let EmailText = `Your Verification Code: ${code}`;
    let EmailSubject = 'Email Verification';

    await EmailSend(email,EmailText,EmailSubject);

    await UserModel.updateOne(
        { email: email },
        { $set: { otp: code } },
        { upsert: true }
    );
    

    return {status:"success", message: "6 Digit Verification code sent successfully"}
    }catch(e){
        return {status:"fail", message: "Something went wrong"}
    }

}

const VerifyOTPService = async (req) => {
    try {
        let email = req.params.email;
        let otp = req.params.otp;

        // Check if user exists with email and otp
        let total = await UserModel.countDocuments({ email: email, otp: otp });

        if (total === 1) {
            // Find user and generate token
            let user = await UserModel.findOne({ email: email, otp: otp }).select('_id');

            let token = EncodeToken(email, user._id.toString());

            // Update OTP to prevent reuse
            await UserModel.updateOne({ email: email }, { $set: { otp: "0" } });

            return { status: "success", message: "Valid OTP", token: token };
        } else {
            return { status: "fail", message: "OTP Invalid" };
        }
    } catch (e) {
        return { status: "fail", message: `Something went wrong: ${e.message}` };
    }
};



const SaveProfileService = async(req)=>{
    try{
        let user_id = req.headers.user_id;
        let reqBody = req.body;
        reqBody.userID = user_id;

        await ProfileModel.updateOne({userID:user_id},{$set:reqBody},{upsert:true});
        return {status:"success", message: "Profile Saved successfully"}

        
    }catch (e) {
        return { status: "fail", message: `Something went wrong: ${e.message}` };
    }
}

const ReadProfileService = async(req)=>{
    try{
        let user_id = req.headers.user_id;
        let result = await ProfileModel.findOne({userID:user_id});
        return {status:"success", message: "Profile retrieved successfully", data:result}
        
    }catch (e) {
        return { status: "fail", message: `Something went wrong: ${e.message}` };
    }
}




module.exports = {
    UserOTPService,
    VerifyOTPService,
    SaveProfileService,
    ReadProfileService,
}