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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const paginationHelper_1 = __importDefault(require("../../../helpers/paginationHelper"));
const user_Modal_1 = require("./user.Modal");
const user_constant_1 = require("./user.constant");
const createUser = (paylode) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_Modal_1.Users.create(paylode);
    return result;
});
const getAllUser = (filters, pageinationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    // pagination helpers
    const { page, limit, skip, sortBy, sortOrder } = (0, paginationHelper_1.default)(pageinationOptions);
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const andCondation = [];
    if (searchTerm) {
        andCondation.push({
            $or: user_constant_1.userSearchableFields.map(field => ({
                [field]: { $regex: searchTerm, $options: 'i' },
            })),
        });
    }
    if (Object.keys(filtersData).length) {
        andCondation.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const sortCondations = {};
    if (sortBy && sortOrder) {
        sortCondations[sortBy] = sortOrder;
    }
    const requestCondetion = andCondation.length > 0 ? { $and: andCondation } : {};
    const result = yield user_Modal_1.Users.find(requestCondetion)
        .sort(sortCondations)
        .skip(skip)
        .limit(limit);
    const total = yield user_Modal_1.Users.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_Modal_1.Users.findById(id);
    return result;
});
const updateUserById = (id, paylode) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_Modal_1.Users.findByIdAndUpdate({ _id: id }, paylode, {
        new: true,
    });
    return result;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_Modal_1.Users.findByIdAndDelete(id);
    return result;
});
exports.UserServices = {
    createUser,
    getAllUser,
    getSingleUser,
    updateUserById,
    deleteUser,
};
