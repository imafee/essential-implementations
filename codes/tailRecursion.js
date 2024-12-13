/**
 * Tail Recursion (尾递归和优化)
 * 概念：
 * - 普通递归函数：调用自身的函数。普通递归函数通过书写 `return expression`的形式来实现的，它的优点是非常直观，缺点是会增加栈帧（stack frame）直至内存爆栈。
 * - 尾递归函数：调用自身语句在函数末行。
 * - 尾递归优化：编译器或者解析器对 `return function(...args)`的形式可以进行优化，即不增加栈帧避免了内存爆栈风险。
 * 例子：以阶乘为例子，说明普通递归与尾递归优化的区别
 */

// 普通递归写法
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(n - 1); // 表达式会增加栈帧
}

// 尾递归优化的递归写法
function factorial(num, accumulator = 1) {
  if (num === 0) return accumulator;
  const result = num * accumulator; // 先计算值后传入，避免使用表达式。
  return factorial(num - 1, result); // 非表达式书写，编译器或解析器可以优化。
}
