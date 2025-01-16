const mongoose =require('mongoose');
const BrandModel = require('../models/BrandModel.js');
const CategoryModel = require('../models/CategoryModel.js');
const ProductSliderModel = require('../models/ProductSliderModel.js');
const ProductModel = require('../models/ProductModel.js');
const ProductDetailModel = require('../models/ProductDetailModel.js');
const ReviewModel = require('../models/ReviewModel.js');

const ObjectId = mongoose.Types.ObjectId;

const BrandListService = async ()=>{
    try{
        let data = await BrandModel.find({});
        return {status:"success", data:data}
    }catch(e){
        return {status:"fail", message:e.toString()};
    }
}


const CategoryListService = async ()=>{
    try{
        let data = await CategoryModel.find({});
        return {status:"success", data:data}
    }catch(e){
        return {status:"fail", message:e.toString()};
    }
}


const SliderListService = async ()=>{
    try{
        let data = await ProductSliderModel.find();
        return {status:"success", data:data}
    }catch(e){
        return {status:"fail", message:e.toString()};
    }

}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


const ListByBrandService = async (req) => {
    try{
        let BrandId = new ObjectId(req.params.BrandID);
        let MatchStage={$match:{brandID:BrandId}}
        let JoinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}}
        let JoinWithCategoryStage ={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}}
        let UnWindBrandStage = {$unwind:"$brand"}
        let UnWindCategoryStage = {$unwind:"$category"}

        let ProjectionStage = {$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnWindBrandStage,
            UnWindCategoryStage,
            ProjectionStage

        ]);
        return { status: "success", data: data };
    }catch (e) {
        return { status: "fail", message: e.toString() };
    }
};

const ListByCategoryService = async (req)=>{
    try{
        let CategoryId = new ObjectId(req.params.CategoryID);
        let MatchStage={$match:{categoryID:CategoryId}}
        let JoinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}}
        let JoinWithCategoryStage ={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}}
        let UnWindBrandStage = {$unwind:"$brand"}
        let UnWindCategoryStage = {$unwind:"$category"}

        let ProjectionStage = {$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}
        
        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnWindBrandStage,
            UnWindCategoryStage,
            ProjectionStage
        ]);
        return { status: "success", data: data };
    }catch (e) {
        return { status: "fail", message: e.toString() };
    }
}

const ListByRemarkService = async (req)=>{
    try{
        let Remark =req.params.Remark;
        let MatchStage={$match:{remark:Remark}}
        let JoinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}}
        let JoinWithCategoryStage ={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}}
        let UnWindBrandStage = {$unwind:"$brand"}
        let UnWindCategoryStage = {$unwind:"$category"}
    
        let ProjectionStage = {$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}
            
        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnWindBrandStage,
            UnWindCategoryStage,
            ProjectionStage
        ]);
            return { status: "success", data: data };
    }catch (e) {
        return { status: "fail", message: e.toString() };
    }
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------





const ListBySmilierService = async (req)=>{
    try{
        let CategoryId = new ObjectId(req.params.CategoryID);
        let MatchStage={$match:{categoryID:CategoryId}}
        let limitStage = {$limit:20}
        let JoinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}}
        let JoinWithCategoryStage ={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}}
        let UnWindBrandStage = {$unwind:"$brand"}
        let UnWindCategoryStage = {$unwind:"$category"}

        let ProjectionStage = {$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}
        
        let data = await ProductModel.aggregate([
            MatchStage,
            limitStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnWindBrandStage,
            UnWindCategoryStage,
            ProjectionStage
        ]);
        return { status: "success", data: data };
    }catch (e) {
        return { status: "fail", message: e.toString() };
    }        
}

const DetailsService = async (req)=>{
    try{
        let ProductId = new ObjectId(req.params.ProductID);
        let MatchStage={$match:{_id:ProductId}}
        let JoinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}}
        let JoinWithCategoryStage ={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}}
        let JoinWithDetailsStage ={$lookup:{from:"productdetails",localField:"_id",foreignField:"productID",as:"details"}}



        let UnwindBrandStage = {$unwind:"$brand"}
        let UnwindCategoryStage = {$unwind:"$category"}
        let UnwindDetailsStage = {$unwind:"$details"}

        let ProjectionStage = {$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0,'reviews._id':0}}
        
        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            JoinWithDetailsStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            UnwindDetailsStage,
            ProjectionStage
        ])
        return { status: "success", data: data };
        
    }catch (e) {
        return { status: "fail", message: e.toString() };
    }

}


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




const ListByKeywordService = async (req)=>{
    try{
        let SearchRegex= {$regex:req.params.Keyword,$options:"i"}
        let SearchParams = [{title:SearchRegex},{shortDes:SearchRegex}]
        let SearchQuery={$or:SearchParams}
        let MatchStage={$match:SearchQuery}

        let JoinWithBrandStage={$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}}
        let JoinWithCategoryStage ={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}}
        let JoinWithDetailsStage ={$lookup:{from:"productdetails",localField:"_id",foreignField:"productID",as:"details"}}

        let UnwindBrandStage = {$unwind:"$brand"}
        let UnwindCategoryStage = {$unwind:"$category"}
        let UnwindDetailsStage = {$unwind:"$details"}



        let ProjectionStage = {$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0,'reviews._id':0,'user._id':0}}
        
        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            JoinWithDetailsStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            UnwindDetailsStage,
            ProjectionStage
        ])
        return { status: "success", data: data };
    }catch (e) {
        return { status: "fail", message: e.toString() };
    }

}


const ReviewListService = async (req)=>{
    try{
        let ProductId = new ObjectId(req.params.ProductID);
        let MatchStage={$match:{productID:ProductId}};
        let JoinWithProfileStage= {$lookup:{from:"profiles",localField:"userID",foreignField:"userID",as:"profile"}};
        let UnwindProfileStage={$unwind:"$profile"}
        let ProjectionStage= {$project: {'des': 1, 'rating': 1, 'profile.cus_name': 1}}

        let data= await  ReviewModel.aggregate([
            MatchStage,
            JoinWithProfileStage,
            UnwindProfileStage,
            ProjectionStage
        ])
        return { status: "success", data: data };
    }catch(e){
        return {status:"fail", message:e.toString()}
    }

}


const CreateReviewService = async (req) => {
    try{
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        let data=await ReviewModel.create({
             productID:reqBody['productID'],
             userID:user_id,
             des:reqBody['des'],
             rating:reqBody['rating'],
         })
        return {status:"success",data:data}
    }
    catch (e) {
        return {status:"fail",data:e.toString()}
    }
}




module.exports = {
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListBySmilierService,
    ListByKeywordService,
    ListByRemarkService,
    DetailsService,
    ReviewListService,
    CreateReviewService
}