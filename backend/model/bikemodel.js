const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bikeSchema = new Schema({
    serviceId: { type: Schema.Types.ObjectId, required: true, auto: true },
    name: { type: String, default: "" },
    amount: { type: Number, default: 0 },
    description: { type: String, default: "" },
    bike_id: { type: Number, default: 0 },

    // order_date: { type: Date, default: Date.now()},
    // delivery_date: { type: Date, default: null },
},{
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
})

bikeSchema.post('save', async(doc) => {
    let count=await Bike.countDocuments({});
    await Bike.updateOne({_id:doc._id},{$set:{bike_id:count+1}});
});
const Bike = new mongoose.model('Service', bikeSchema)

module.exports = Bike