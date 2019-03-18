/**
 * 输入: "(()"
 * 输出: 2
 * 
 * 输入: ")()())"
 * 输出: 4
 * 解释: 最长有效括号子串为 "()()"
 * @param {*} s 
 */

var longestValidParentheses1 = function(s) {
  let stack = [-1], maxLength = 0 // 哨兵
  for (let i=0; i<s.length; i++) {
      if (s[i] === '(') {
          stack.push(i)
          continue
      }
      stack.pop() // 成对出栈
      const lastIndex = stack[stack.length-1]
      if (stack.length === 0) {
          stack.push(i) // 新的哨兵
      } else {
          maxLength = Math.max(maxLength, i-lastIndex)
      }
  }
  return maxLength
};
var longestValidParentheses2 = function(s) {
  let left = 0, right = 0, maxLength = 0
  for (let i=0; i<s.length; i++) {
      if (s[i] === '(') {
          left++
      } else {
          right++
      }
      if (left === right) {
          maxLength = Math.max(maxLength, 2 * right)
      }
      if (left < right) {
          left = right = 0
      }
  }
  left = right = 0
  for (let i=s.length-1; i>=0; i--) {
      if (s[i] === '(') {
          left++
      } else {
          right++
      }
      if (left === right) {
          maxLength = Math.max(maxLength, 2 * right)
      }
      if (left > right) {
          left = right = 0
      }
  }
  return maxLength
};