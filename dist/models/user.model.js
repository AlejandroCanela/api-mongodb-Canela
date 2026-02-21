"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var UserSchema = new mongoose_1.default.Schema({
    username: { type: String, default: "Nuevo usuario" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { versionKey: false });
var User = mongoose_1.default.model("User", UserSchema);
exports.User = User;
