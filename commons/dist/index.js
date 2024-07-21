"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInput = exports.postBlogInput = exports.signUpInput = exports.signInInputs = void 0;
const zod_1 = require("zod");
exports.signInInputs = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Please enter a valid email address" }),
    password: zod_1.z
        .string()
        .min(6, { message: "Password must be at least 6 characters" })
        .regex(/[A-Z]/, {
        message: "Password must contain at least one upper case alphabet",
    })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[! @ # $ % ^ & * ( ) - _ + = { }  | \ ; : " ' , . / ? < > ~ ]/, {
        message: "Password must contain at least one special character",
    }),
});
exports.signUpInput = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email({ message: "Please enter a valid email address" }),
    password: zod_1.z
        .string()
        .min(6, { message: "Password must be at least 6 characters" })
        .regex(/[A-Z]/, {
        message: "Password must contain at least one upper case alphabet",
    })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[! @ # $ % ^ & * ( ) - _ + = { }  | \ ; : " ' , . / ? < > ~ ]/, {
        message: "Password must contain at least one special character",
    }),
});
exports.postBlogInput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
exports.updateBlogInput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    id: zod_1.z.string(),
});
