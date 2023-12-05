"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamServices = void 0;
const team_modal_1 = require("./team.modal");
const createTeam = (paylode) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(paylode);
    const result = yield team_modal_1.Team.create(paylode);
    return result;
});
const getTeam = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield team_modal_1.Team.find({});
    return result;
});
exports.teamServices = {
    createTeam,
    getTeam,
};
