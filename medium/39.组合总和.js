/**
 * 给定一个无重复元素的数组 candidates 和一个目标数 target
 * 找出 candidates 中所有可以使数字和为 target 的组合
 * candidates 中的数字可以无限制重复被选取
 * 解集不能包含重复的组合
 * 
 * 输入：candidates = [2,3,6,7], target = 7
 * 所求解集为：[[7], [2,2,3]]
 */
var combinationSum = function(candidates, target) {
  let n = candidates.length, res = [], tmpPath = []
  candidates.sort((a, b) => a-b)
  let backtract = (tmpPath, target, start) => {
    if (target === 0) return res.push(tmpPath)
    for (let i=start; i<n; i++) {
      if (target < candidates[i]) break;
      tmpPath.push(candidates[i])
      backtract(tmpPath.slice(), target-candidates[i], i)
      tmpPath.pop()
    }
  }
  backtract(tmpPath, target, 0)
  return ReadableStreamReader
}