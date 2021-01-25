## 思想
抛弃webpack等打包工具，**直接利用浏览器原生的js模块功能**
### 原因
* 主要浏览器都支持js Module
* http2普及，相较于http1.1可以合并请求
## 浏览器原生支持ES模块，意味着什么？
[掘金原文](https://juejin.cn/post/6844903635453739022)
* 关于webpack打包: 编写代码时使用模块拆分，最后打包合并成一个bundle.js文件，再在HTML最后使用 < script src="bundle.js">标签引入，**本质上其实还是只引入加载了一个js文件**
* **type="module"属性, 可以让浏览器以ES Module的方式加载脚本**，ES脚本默认是defer的，无论是内联或外联，当然可以显式指定async属性来覆盖
* 本来script 的src属性不受同源策略的限制，现在type="module"严格遵守CORS安全
