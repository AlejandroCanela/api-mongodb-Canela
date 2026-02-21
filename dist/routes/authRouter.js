"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
var express_1 = require("express");
var auth_controller_1 = require("../controllers/auth.controller");
var authRouter = (0, express_1.Router)();
exports.authRouter = authRouter;
authRouter.post("/register", auth_controller_1.register);
authRouter.post("/login", auth_controller_1.login);
