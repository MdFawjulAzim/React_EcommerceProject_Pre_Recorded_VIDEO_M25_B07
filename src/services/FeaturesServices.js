const FeaturesModel = require("../models/FeaturesModel.js");

const FeaturesListService = async () => {
    try {
        let data= await FeaturesModel.find();
        return {status:"success",data:data}
    }
    catch (e) {
        return { status: "fail", message: `Something went wrong: ${e.message}` };
    }
}




module.exports={
    FeaturesListService
}