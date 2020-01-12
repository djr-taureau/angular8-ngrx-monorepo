/**
 * Setup a `window.setTimeout` for the current function
 * @param milliseconds Time to wait before calling method
 */
export function Timeout(milliseconds: number = 0) {
  return function(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args) {
      setTimeout(() => {
        originalMethod.apply(this, args);
      }, milliseconds);
    };
    return descriptor;
  };
}
