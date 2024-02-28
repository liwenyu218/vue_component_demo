function broadcast(componentName, eventName, params) {
  // 遍历当前组件的所有子组件
  this.$children.forEach((child) => {
    const name = child.$options.name;

    if (name === componentName) {
      // 找到了目标组件, 则在目标组件上执行emit方法
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      // 去到子组件中继续寻找
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}

export default {
  methods: {
    dispatch(componentName, eventName, params) {
      // 拿到当前父组件的name
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;

      // 当父组件存在并且 其名字不存在或不等于组件名 就会一直寻找
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.name;
        }
      }
      if (parent) {
        // 在parent组件上执行emit事件
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    },
  },
};
