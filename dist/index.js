"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var mongodb_1 = require("./config/mongodb");
var productsRouter_1 = require("./routes/productsRouter");
var authRouter_1 = require("./routes/authRouter");
var authMiddleware_1 = require("./middleware/authMiddleware");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var serverHttp = (0, express_1.default)();
// middleware
serverHttp.use((0, cors_1.default)());
serverHttp.use(express_1.default.json());
// http://localhost:50000/products
serverHttp.use("/products", authMiddleware_1.authMiddleware, productsRouter_1.productRouter);
serverHttp.use("/auth", authRouter_1.authRouter);
// error 404
serverHttp.use(function (req, res) {
    res.status(404).json({ success: false, error: "el recurso no se encuentra" });
});
var PORT = process.env.PORT;
// 0 - 65656
serverHttp.listen(PORT, function () {
    try {
        console.log("\u2705 Servidor http en escucha en el puerto http://127.0.0.1:".concat(PORT));
        (0, mongodb_1.connectDb)();
    }
    catch (error) {
        var err = error;
        console.log(err.message);
        process.exit(1);
    }
});
