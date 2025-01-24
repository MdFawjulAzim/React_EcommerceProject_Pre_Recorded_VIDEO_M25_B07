const FeaturesModel = require("../models/FeaturesModel.js");
const LegalModel = require("../models/LegalModel.js");

const FeaturesListService = async () => {
    try {
        let data= await FeaturesModel.find();
        return {status:"success",data:data}
    }
    catch (e) {
        return { status: "fail", message: `Something went wrong: ${e.message}` };
    }
}

const LegalDetailsService = async (req) => {
    try {
        let type=req.params.type
        let data= await LegalModel.find({type:type});
        return {status:"success",data:data}
    }
    catch (e) {
        return {status:"fail",data:e}.toString()
    }
}




module.exports={
    FeaturesListService,
    LegalDetailsService
}