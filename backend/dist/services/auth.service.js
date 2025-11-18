"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = exports.registerService = void 0;
const hash_1 = require("../utils/hash");
const jwt_1 = require("../utils/jwt");
const registerService = async (prisma, data) => {
    const hashedPassword = await (0, hash_1.hashPassword)(data.password);
    const user = await prisma.user.create({
        data: { ...data, password: hashedPassword },
    });
    return { user, token: (0, jwt_1.signToken)({ id: user.id, email: user.email }) };
};
exports.registerService = registerService;
const loginService = async (prisma, email, password) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await (0, hash_1.comparePassword)(password, user.password))) {
        throw new Error('Invalid credentials');
    }
    return { user, token: (0, jwt_1.signToken)({ id: user.id, email: user.email }) };
};
exports.loginService = loginService;
