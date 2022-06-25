import { log } from "../utils";

export const joinWithDash = (...args) => {
  return args.join("-");
  //   return args.reduce((prev, cur, i) => (i === 0 ? cur : prev + "-" + cur), "");
};
// console.log(joinWithDash("a", "b", "c", "d"));

/************************************************************************************* */
export const joinWithDashFixed = (a, b, c, d) => {
  return a + "-" + b + "-" + c + "-" + d;
  //   return args.reduce((prev, cur, i) => (i === 0 ? cur : prev + "-" + cur), "");
};

function curry(fn) {
  return function curried(...args) {
    if (args.length < fn.length) {
      return function (...args2) {
        return curried.apply(this, [...args, ...args2]);
      };
    }
    return fn.apply(this, args);
  };
}

const curriedFn = curry(joinWithDashFixed);
// curriedFn("a", "b")("c")("d");

// document.write("<code>" + curriedFn("a", "b")("c")("d") + "</code>");
log("1. curry", curriedFn("a", "b")("c")("d"));

// join;
//
