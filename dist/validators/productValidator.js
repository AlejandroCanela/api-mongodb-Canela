"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productPartialValidate = exports.productValidate = void 0;
var zod_1 = require("zod");
var productValidate = zod_1.z.object({
    name: zod_1.z.string().min(4),
    price: zod_1.z.number(),
    stock: zod_1.z.number(),
    description: zod_1.z.string(),
    category: zod_1.z.string()
});
exports.productValidate = productValidate;
var productPartialValidate = productValidate.partial();
exports.productPartialValidate = productPartialValidate;
