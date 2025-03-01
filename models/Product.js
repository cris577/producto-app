const mongoose = require("mongoose");

// Esquema para los productos
const productSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
price: {
type: Number,
required: true
}
});
// Modelo de producto
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
