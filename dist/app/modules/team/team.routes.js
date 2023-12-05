"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRoutes = void 0;
const express_1 = __importDefault(require("express"));
const team_controller_1 = require("./team.controller");
const router = express_1.default.Router();
router.get('/', team_controller_1.teamController.getTeams);
router.post('/', team_controller_1.teamController.createTeam);
exports.TeamRoutes = router;
