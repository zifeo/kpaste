const LOWER = "abcdefghijklmnopqrstuvwxyz";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*-+=_"; // Safe symbols
const ALL = LOWER + UPPER + NUMBERS + SYMBOLS;

const getRandomChar = (set: string): string => {
  const buffer = new Uint32Array(1);
  globalThis.crypto.getRandomValues(buffer);
  return set[buffer[0] % set.length];
};

const shuffle = (array: string[]): string[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const buffer = new Uint32Array(1);
    globalThis.crypto.getRandomValues(buffer);
    const j = buffer[0] % (i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

/**
 * Generates a cryptographically secure random password.
 * Best practice: ensures at least one of each character type (lower, upper, number, symbol)
 * if the requested length allows.
 */
export const generatePassword = (length: number = 32): string => {
  if (length < 12) {
    throw new Error("Password length must be at least 12 characters");
  }

  const password: string[] = [];

  // Guaranteed characters (if length permits)
  if (length >= 1) password.push(getRandomChar(LOWER));
  if (length >= 2) password.push(getRandomChar(UPPER));
  if (length >= 3) password.push(getRandomChar(NUMBERS));
  if (length >= 4) password.push(getRandomChar(SYMBOLS));

  // Fill the remaining length with characters from all sets
  while (password.length < length) {
    password.push(getRandomChar(ALL));
  }

  // Shuffle to avoid predictable positions
  return shuffle(password).join("");
};
