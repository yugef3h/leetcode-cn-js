var largestRectangleArea = function(heights) {
  let stack =[], area = 0
  if (heights.length === 0) return 0
  if (heights.length === 1) return heights[0]
  heights.unshift(0) // 前后哨兵
  heights.push(0)
  for (let i=0; i<heights.length; i++) {
    // 不断 while 判断新的栈顶
    while (stack.length > 0 && heights[stack[stack.length-1]] > heights[i]) {
      area = Math.max(area, heights[stack.pop()] * (i - stack[stack.length-1] - 1))
    }
    stack.push(i)
  }
  return area
}