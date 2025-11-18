"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountsService = exports.createAccountService = void 0;
const createAccountService = async (prisma, data) => {
    return await prisma.account.create({
        data: {
            ...data,
            balance: data.balance ?? 0,
        },
    });
};
exports.createAccountService = createAccountService;
const getAccountsService = async (prisma, userId) => {
    return await prisma.account.findMany({
        where: { userId },
        include: { transactions: true },
    });
};
exports.getAccountsService = getAccountsService;
