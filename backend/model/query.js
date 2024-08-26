const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const querySchema = new Schema({
    // serviceId: { type: Schema.Types.ObjectId, required: true, auto: true },
    name: { type: String, default: "" },
    phone: { type: Number},
    // address: { type: String, default: "" },
    email: { type: String, default: "" },
    message: { type: String, default: "" },
    // services: { type: String, default: "" },
    // orderId: { type: String, default: "" },
    // serviceDate: { type: Date}, 
    // booking_id: { type: Number, default: 0 },

    // order_date: { type: Date, default: Date.now()},
    // delivery_date: { type: Date, default: null },
},{
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
})

querySchema.post('save', async(doc) => {
    let count=await Query.countDocuments({});
    await Query.updateOne({_id:doc._id},{$set:{booking_id:count+1}});
});
const Query = new mongoose.model('Query', querySchema)

module.exports = Query