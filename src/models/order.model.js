import mongoose from "mongoose";


//const roundMoney = (value) => Number(value.toFixed(2));

const orderBuyerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    contact: {
        type: String,
        required: true,
        trim: true
    }
}, {
    _id: false,
    versionKey: false,
    timestamps: false
});

const orderItemSchema = new mongoose.Schema({
    isbn: {
        type: String,
        required: true,
 //       unique: true, //WRONG
        trim: true,
        minLength: 10,
        maxlength: 13,
        index: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    priceAtPurchase: {
        type: Number,
        required: true,
        min: 0.01,
        max: 999.99,
    },
    qty: {
        type: Number,
        required: true,
        min: 1,
        validate: {
            validator: Number.isInteger,
            message: 'Qty must be an integer',
        },
    },
    lineTotal: {
        type: Number,
        required: true,
        min: 0.01,
    },

}, {
    _id: false,
    versionKey: false,
})

const orderSummarySchema = new mongoose.Schema({
    subtotal: {
        type: Number,
        required: true,
        min: 0.01,
    },
    total: {
        type: Number,
        required: true,
        min: 0.01,
    }
}, {
    _id: false,
    versionKey: false,
})

const orderSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        default: 'placed',
        enum: ['placed', 'paid', 'canceled', 'shipped'],
    },
    buyer: {
        type: orderBuyerSchema,
        required: true,
    },
    items:{
        type: [orderItemSchema],
        required: true,
        validate:  {
            validator: (items) => Array.isArray(items) && items.length > 0,
            message: "Order must contain at least 1 item",
        }
    },
    summary:{
        type: orderSummarySchema,
        required: true,
    }
}, {
    versionKey: false,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id.toString();
            delete ret._id;
            return ret;
        }
    }
})

const Order = mongoose.model('Order', orderSchema);
export default Order;