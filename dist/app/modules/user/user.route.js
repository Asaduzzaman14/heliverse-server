"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_Controller_1 = require("./user.Controller");
const router = express_1.default.Router();
router.post('/', user_Controller_1.UserController.createUser);
router.get('/:id', user_Controller_1.UserController.getUserById);
router.patch('/:id', user_Controller_1.UserController.updateUserById);
router.delete('/:id', user_Controller_1.UserController.deleteUser);
router.get('/', user_Controller_1.UserController.getAllUser);
exports.AcademicDepartmentRoutes = router;
