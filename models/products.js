
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true,
    },

    quantity : {
        type : Number,
    }

},{
    timestamps : true,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;