## 总概
````html
1. webpack 内部模块机制
  webpack 基于tapable构建
  tapable 构建流程管控

2. 抽象语法树
   状态机、正则匹配  构建AST树
   代码编译流程 

3. bundle、最新bundleless原理
   tree shaking原理

打包的过程 其实就是在组织代码
gulp 基于配置项来处理要打包的资源
webpack 基于依赖 编译过程中 基于import require就知道哪些资源要处理
webpack 模块引用路径  => 依赖


模块太多会有什么问题？
1) 太多变量方法，命名、模块与模块之间存在冲突
解决冲突 需要隔离，这是webpack要做的
模块隔离就是作用域隔离 => 函数作用域隔离 => function(){} => 闭包

2) 产生了依赖之后，存在一个模块执行先后顺序的问题
   webpack 保证模型执行顺序  数组形式保证
   // b.js
   export var name = 'qgq'


   // a.js
   import { name } from 'b.js'
   function getName(){
       console.log(name) 
   }
 
   a 依赖了 b、C模块 
   b 依赖 d 模块       
   c 依赖了 e、f模块
   a 模块是入口, 其实是一个递归 深度优先遍历的过程

````