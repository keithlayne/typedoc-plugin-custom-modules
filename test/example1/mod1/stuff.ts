import { SomeParams } from "./nested";

/**
 * @module Module 1
 */
export function decorate(obj: SomeParams): SomeParams {
  return {
    ...obj,
    num: obj.num + 1
  };
}

// /**
//  * @module1 Module 1
//  */
// let typeLiteral = {
//   valueA: "stuff"
// };

// export { typeLiteral };