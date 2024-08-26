const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    // serviceId: { type: Schema.Types.ObjectId, required: true, auto: true },
    name: { type: String, default: "" },
    phone: { type: Number},
    address: { type: String, default: "" },
    email: { type: String, default: "" },
    comment: { type: String, default: "" },
    services: { type: String, default: "" },
    orderId: { type: String, default: "" },
    serviceDate: { type: Date}, 
    booking_id: { type: Number, default: 0 },

    // order_date: { type: Date, default: Date.now()},
    // delivery_date: { type: Date, default: null },
},{
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
})

bookingSchema.post('save', async(doc) => {
    let count=await Booking.countDocuments({});
    await Booking.updateOne({_id:doc._id},{$set:{booking_id:count+1}});
});
const Booking = new mongoose.model('Booking', bookingSchema)

module.exports = Booking