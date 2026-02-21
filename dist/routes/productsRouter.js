"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
var express_1 = require("express");
var product_controller_1 = require("../controllers/product.controller");
var productRouter = (0, express_1.Router)();
exports.productRouter = productRouter;
// GET - http://localhost:50000/products/
productRouter.get("/", product_controller_1.getProducts);
productRouter.post("/", product_controller_1.createProduct);
productRouter.patch("/:id", product_controller_1.updateProduct);
productRouter.delete("/:id", product_controller_1.deleteProduct);
