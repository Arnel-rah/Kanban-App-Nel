"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBudgetSchema = void 0;
const zod_1 = require("zod");
exports.createBudgetSchema = zod_1.z.object({
    month: zod_1.z.number().min(1).max(12),
    year: zod_1.z.number().min(2020),
    amount: zod_1.z.number().min(0),
    categoryId: zod_1.z.string(),
});
