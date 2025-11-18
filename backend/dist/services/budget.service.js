"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBudgetsService = exports.createBudgetService = void 0;
const createBudgetService = async (prisma, data) => {
    return await prisma.budget.create({
        data,
        include: { category: true },
    });
};
exports.createBudgetService = createBudgetService;
const getBudgetsService = async (prisma, userId, month, year) => {
    return await prisma.budget.findMany({
        where: { userId, month, year },
        include: { category: true },
    });
};
exports.getBudgetsService = getBudgetsService;
