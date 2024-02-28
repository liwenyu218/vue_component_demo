/*
 * @Author: Liwenyu
 * @Date: 2024-02-26 14:24:30
 * @LastEditors: Liwenyu
 * @LastEditTime: 2024-02-26 15:27:08
 * @FilePath: \report-demo\src\utils\assist.js
 * @Description:
 *
 */
function findComponentUpward(context, componentName) {
  let parent = context.$parent;
  let name = parent.$options.name;

  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent;
    if (parent) name = parent.$options.name;
  }
  return parent;
}

export { findComponentUpward };
