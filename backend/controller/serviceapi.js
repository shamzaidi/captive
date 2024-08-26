const Service = require('../model/servicemodel')
const utility = require('../Utility/utility')
const Joi = require("joi")

exports.Services = async(req, res) =>{
    try{
        let body = req.body
        
        if(!req.body.serviceId){
        let save=await new Service(body).save();
        const created_user = await Service.findOne({_id:save._id})
        
    if(created_user){
    return await utility.success(res,created_user, "order Created")
    }
}
    else{
        return await utility.failure(res, "" , "Something Went Wrong")
    }
} catch (error) {
    console.log("err",error);
} 
}
exports.getAllServices = async(req, res) =>{
    try{
        let body = req.body
        
        // if(!req.body.serviceId){
        // let save=await new Service(body).save();
        const created_user = await Service.find()
        
    if(created_user){
    return await utility.success(res,created_user, "order Created")
    }

    else{
        return await utility.failure(res, "" , "Something Went Wrong")
    }
} catch (error) {
    console.log("err",error);
} 
}
