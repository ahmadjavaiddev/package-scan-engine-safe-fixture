import isNumber from "is-number";

export function add(left: number, right: number): number {
  if (!isNumber(left) || !isNumber(right)) throw new TypeError("Both values must be numbers");
  return left + right;
}
