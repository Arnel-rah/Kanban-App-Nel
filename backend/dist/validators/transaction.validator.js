"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransactionSchema = void 0;
const zod_1 = require("zod");
exports.createTransactionSchema = zod_1.z.object({
    amount: zod_1.z.number().min(0),
    description: zod_1.z.string().optional(),
    date: zod_1.z.string().datetime(),
    type: zod_1.z.enum(['income', 'expense']),
    accountId: zod_1.z.string(),
    categoryId: zod_1.z.string().optional(),
});
