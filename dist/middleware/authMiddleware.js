"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var authMiddleware = function (req, res, next) {
    var header = req.headers.authorization;
    var JWT_SECRET = process.env.JWT_SECRET;
    if (!header) {
        return res.status(401).json({ success: false, error: "el token es requerido" });
    }
    if (!header.startsWith("Bearer")) {
        return res.status(401).json({ success: false, error: "el token debe ser formato jwt" });
    }
    var array = header.split(" ");
    var token = array[1];
    if (!token) {
        return res.status(401).json({ success: false, error: "token invalido" });
    }
    try {
        var payload = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = payload;
        next();
    }
    catch (error) {
        var err = error;
        res.status(500).json({ success: false, error: err.message });
    }
};
exports.authMiddleware = authMiddleware;
