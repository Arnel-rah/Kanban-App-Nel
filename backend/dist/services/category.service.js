"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoriesService = exports.createCategoryService = void 0;
const createCategoryService = async (prisma, data) => {
    return await prisma.category.create({
        data,
    });
};
exports.createCategoryService = createCategoryService;
const getCategoriesService = async (prisma, userId) => {
    return await prisma.category.findMany({ where: { userId } });
};
exports.getCategoriesService = getCategoriesService;
