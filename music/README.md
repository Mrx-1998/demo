├─api                   // 网路请求代码、工具类函数和相关配置
├─application           // 项目核心功能
├─assets                // 字体配置及全局样式
├─baseUI                // 基础 UI 轮子
├─components            // 可复用的 UI 组件
├─routes                // 路由配置文件
└─store                 //redux 相关文件
  App.js                // 根组件
  index.js              // 入口文件
  serviceWorker.js      // PWA 离线应用配置
  style.js              // 默认样式


  # renderRoutes 这个方法只渲染一层路由，之前 Home 处于数组第一层，后面的功能组件在第二层，当然不能正常渲染啦。其实要解决这个问题也非常简单，只需在 Home 中再次调用 renderRoutes 即可。


  # 其中 redux-immutable 大家可能比较陌生，因为项目中需要用到 immutable.js 中的数据结构，所以合并不同模块 reducer 的时候需要用到 redux-immutable 中的方法。

  # npm install swiper --save
  swiper 中间件的使用？


  # React.memo()
  1. React.memo() 和 PureComponent 很相似，它帮助我们控制何时重新渲染组件。
      组件仅在它的 props 发生改变的时候进行重新渲染。通常来说，在组件树中 React 组件，只要有变化就会走一遍渲染流程。但是通过 PureComponent 和 React.memo()，我们可以仅仅让某些组件进行渲染。
  2. PureComponent 要依靠 class 才能使用。而 React.memo() 可以和 functional component 一起使用。

  # npm install better-scroll@next --save

  Scroll.propTypes = {
  direction: PropTypes.oneOf (['vertical', 'horizental']),// 滚动的方向
  click: true,// 是否支持点击
  refresh: PropTypes.bool,// 是否刷新
  onScroll: PropTypes.func,// 滑动触发的回调函数
  pullUp: PropTypes.func,// 上拉加载逻辑
  pullDown: PropTypes.func,// 下拉加载逻辑
  pullUpLoading: PropTypes.bool,// 是否显示上拉 loading 动画
  pullDownLoading: PropTypes.bool,// 是否显示下拉 loading 动画
  bounceTop: PropTypes.bool,// 是否支持向上吸顶
  bounceBottom: PropTypes.bool// 是否支持向下吸底
  };

  scroll 组件在业务中会被经常取到原生 DOM 对象，而函数式组件天生不具备被上层组件直接调用 ref 的条件，因此需要用 React 当中一些特殊的方式来处理，即使用 forwardRef 进行包裹。

  const Scroll = forwardRef ((props, ref) => {
    // 编写组件内容
  })


  # redux
  actionCreators.js// 放不同 action 的地方
  constants.js      // 常量集合，存放不同 action 的 type 值
  index.js          // 用来导出 reducer，action
  reducer.js        // 存放 initialState 和 reducer 函数

  # npm install react-lazyload --save