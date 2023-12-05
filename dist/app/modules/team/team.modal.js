"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const mongoose_1 = require("mongoose");
const PcPartsSchema = new mongoose_1.Schema({
    email: {
        type: String,
    },
    users: [
        {
            id: { type: Number },
            first_name: { type: String },
            last_name: { type: String },
            email: { type: String },
            gender: {
                type: String,
                enum: ['Male', 'Female', 'Other'], // Add other gender options if needed
            },
            avatar: { type: String },
            domain: { type: String },
            available: { type: Boolean },
        },
    ],
}, {
    timestamps: true,
});
exports.Team = (0, mongoose_1.model)('teams', PcPartsSchema);
