const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    serviceId: { type: Schema.Types.ObjectId, required: true, auto: true },
    name: { type: String, default: "" },
    amount: { type: Number, default: 0 },
    description: { type: String, default: "" },
    service_id: { type: Number, default: 0 },

    // order_date: { type: Date, default: Date.now()},
    // delivery_date: { type: Date, default: null },
},{
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
})

serviceSchema.post('save', async(doc) => {
    let count=await Service.countDocuments({});
    await Service.updateOne({_id:doc._id},{$set:{service_id:count+1}});
});
const Service = new mongoose.model('Service', serviceSchema)

module.exports = Service