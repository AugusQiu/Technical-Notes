## 情景题
>两个script，一个从CDN加载loadash,另一个从本地加载script.js，假设总是本地脚本下载更快

````js
// script.js
try{
    console.log(_.VERSION)
}catch(err){
    console.log('Loadash Not Available')
}
console.log(document.body ? 'YES':'NO')
````
````html
// A. plain.html
<head>
	<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min.js"></script>
    <script src="script.js"></script>
</head>

// B. async.html
<head>
	<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min.js" async></script>
    <script src="script.js" async></script>
</head>

// C. defer.html
<head>
	<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min.js" defer></script>
    <script src="script.js" defer></script>
</head>
````
A 输出
````
4.17.10
NO
````
> 在defer和async属性诞生之前，浏览器加载脚本是采用**同步模型(按照顺序)，浏览器自上而下解析HTML标签，直到遇到script标签，会暂停对文档其他标签的解析而读取script标签**

* script无src属性，是内联脚本，解析器会直接读取标签的textContent，由JS解释器执行JS代码
* script有src属性，为外部脚本，则先从src指定的uri发起网络请求下载脚本，再执行  

但其实两种情况都会阻塞浏览器的解析，所以script脚本执行时，位于script标签上的DOM元素可用，位于其以下的DOM元素不可用
### script加上defer和async属性呢？
* async在脚本加载时，不会阻塞浏览器的解析
DOMContentLoaded和async脚本不会彼此等待:  
DOMContentLoaded 可能会发生在异步脚本之前（如果异步脚本在页面完成后才加载完成）  
DOMContentLoaded 也可能发生在异步脚本之后（如果异步脚本很短，或者是从 HTTP 缓存中加载的）  
* **具有defer特性的脚本总是要等到 DOM 解析完毕，但在DOMContentLoaded事件之前执行**
### async脚本每个都会在下载完成后立即执行，无关script标签出现的顺序；defer脚本会根据script标签顺序先后执行

````js
// B. async.html
Lodash Not Available
YES

// C. defer.html
4.17.10
YES
````
另外，**把async和defer属性应用到内联script时，是没有效果的！！！**