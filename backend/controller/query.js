const Query = require('../model/query')
const utility = require('../Utility/utility')
exports.Query = async(req,res)=>{
    try {
    let body   = req.body
    if(body.name && body.phone && body.email){
    let data = new Query(body).save()
    if(data){
        return utility.success(res, data, "your Query has been made")
    }
    }
    } catch (error) {
        return utility.failure(res, "There is something wrong while getting you details")
    }
}