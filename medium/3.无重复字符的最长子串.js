/**
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度

输入: "pwwkew"
输出: 3

解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */


var lengthOfLongestSubstring = function(s) {
  let str = '', left = 0, len = 0
  for (let i=0; i<s.length; i++) {
    if (str.indexOf(s[i]) !== -1) {
      // 当前移动到 i，比较的也是 i，所以 s.slice(left, i) 不包 i
      // 从 indexOf 里找到 s[i] 的位置，我们要从它的下一位开始，故 +1
      // 现在是从 s.slice(left, i) 中找，其实是一个相对位置，故要 left += ...
      left += s.slice(left, i).indexOf(s[i]) + 1
    }
    str = s.slice(left, i+1)
    len = Math.max(len, str.length)
  }
  return len
}
