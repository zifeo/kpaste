import { describe, it, expect } from "vitest";
import { generatePassword } from "./PasswordGenerator";

describe("PasswordGenerator", () => {
  it("generates a password of specified length", () => {
    const length = 16;
    const password = generatePassword(length);
    expect(password).toHaveLength(length);
  });

  it("generates a password with default length 32", () => {
    const password = generatePassword();
    expect(password).toHaveLength(32);
  });

  it("contains at least one number", () => {
    for (let i = 0; i < 100; i++) {
      const password = generatePassword(12);
      expect(password).toMatch(/[0-9]/);
    }
  });

  it("contains at least one symbol", () => {
    for (let i = 0; i < 100; i++) {
      const password = generatePassword(12);
      expect(password).toMatch(/[!@#$%^&*-+=_]/);
    }
  });

  it("throws error for length below 12", () => {
    expect(() => generatePassword(11)).toThrow("Password length must be at least 12 characters");
  });

  it("throws error for negative length", () => {
    expect(() => generatePassword(-1)).toThrow("Password length must be at least 12 characters");
  });

  it("handles large lengths", () => {
    const length = 256;
    const password = generatePassword(length);
    expect(password).toHaveLength(length);
  });

  it("ensures variety for minimum required length 12", () => {
    const password = generatePassword(12);
    expect(password).toMatch(/[a-z]/);
    expect(password).toMatch(/[A-Z]/);
    expect(password).toMatch(/[0-9]/);
    expect(password).toMatch(/[!@#$%^&*-+=_]/);
  });
});
