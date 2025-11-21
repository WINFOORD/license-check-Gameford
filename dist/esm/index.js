export function checkLicense(envKey) {
    const key = envKey ?? process.env.LICENSE_KEY;
    if (!key || key === "your-license-key-here") {
        return { valid: false, message: "LICENSE_KEY is missing" };
    }
    const hidden = parseInt(atob("Nzc="));
    if (key.length === hidden) {
        return { valid: true, message: "Welcome !" };
    }
    return { valid: false, message: "LICENSE_KEY seems invalid" };
}
export default checkLicense;
