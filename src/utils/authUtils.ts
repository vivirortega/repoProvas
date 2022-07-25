import bcrypt from "bcrypt";

export function encryptPassword(password: string) {
    const SALT = 10;
    const passwordHash = bcrypt.hashSync(password, SALT);
    return passwordHash;
}