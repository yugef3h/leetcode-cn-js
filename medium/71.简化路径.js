/**
 * 以 Unix 风格给出一个文件的绝对路径，你需要简化它。或者换句话说，将其转换为规范路径
 * 
 * 输入："/home/"
 * 输出："/home"
 * @param {*} path 
 */
var simplifyPath = function(path) {
  // 栈解
  let stack = []
  let pathArr = path.split('/')
  for (let item of pathArr) {
      if (item === '' || item === '.') continue
      if (item === '..') {
          stack.pop()
          continue
      }
      stack.push(item)
  }
  return '/' + stack.join('/')
};