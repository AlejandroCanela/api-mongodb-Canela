"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
// contrato 
// como defina un producto es como lo voy a manipular
var ProductSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    price: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    description: { type: String, default: "Sin descripción" },
    category: { type: String, default: "Sin categoria" }
}, {
    versionKey: false
});
var Product = mongoose_1.default.model("Product", ProductSchema);
exports.Product = Product;
