## 快手实习总结
## 组件封装
### 关于.sync修饰符 
父组件向子组件 prop传值 用.sync修饰, 子组件不要 用表单项v-model去双向绑定修改这个prop，这也是vue.js不推荐的使用方式。改变这个prop值的事件来源一定要确定，可改表单双向绑定为单向: **value值绑定+监听change** 的方式
````js
// 父组件
<child name.sync="name" ></child>

// 子组件
<ks-input 
   :value="name"
   @input="$emit('update:name',$event)"
></ks-input>

props:{
    name:{
        type:string,
        required:true,
    }
}
````
另外，需注意 input、radio-group等组件value需与input事件搭配，select是change
> :warning: vue3.0 删掉了.sync
考虑子组件不复用，数据不复用，直接在子组件内部接口请求所需数据，不使用props传递

### 关于组件内部接口请求数据还是父组件prop传入
* 如果prop传入的这份数据，有多个子组件复用的情况，那么推荐在组件外部接口请求
* 另一个情况: 接口传来的数据格式是数组，但是组件内部需要的是树状，这个时候需要进行处理，不推荐在组件内部另起方法处理格式，而是在外层处理好数据，传入
### 变量、函数是否多余
* 组件内部定义的变量、函数能少就少  
* copy代码，尽量去理解，不适用当前页面、无用的逻辑要删掉
* 没有复用的方法且只有一行代码，可以直接写在template的调用处，更直观
### 命名
map、list修饰数组、info...  
props、event命名语义化，避免单个单词的命名，必须有清晰的注释描述  
### 组件目录管理
* 组件目录， 遵循 ”就近维护“ 的原则
* 抽离的组件/代码块，优先放置到页面类型文件夹下，根据共用程度，依次抽离到 自己模块的components文件夹下、src的components文件夹下


