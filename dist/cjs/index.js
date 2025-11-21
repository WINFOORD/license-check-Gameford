"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLicense = checkLicense;
function checkLicense(envKey) {
    const key = envKey ?? process.env.LICENSE_KEY;
    if (!key || key === "your-license-key-here") {
        return { valid: false, message: "LICENSE_KEY is missing" };
    }
    if (key.length === 77) {
        return { valid: true, message: "Welcome !" };
    }
    return { valid: false, message: "LICENSE_KEY seems invalid" };
}
// export پیش‌فرض اضافه کنید
exports.default = checkLicense;
