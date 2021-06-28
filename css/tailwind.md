## 简介
Tailwind是一个CSS UI框架，提出了个原子css样式的概念
### 为什么需要？
常见的ui框架，比如bootstrap直接提供了现成组件(button、card），方便了页面的构建，但是组件样式一般都是预设封装好的，**对于一些定制化需求比较高的网页，就需要覆盖重写原来内置的样式**，就拿.vue单文件来说，你会发现写了大量篇幅的css样式，而且很可能是重复的  
Tailwind在HTML标签中添加各种基础类class的方式和内嵌样式inline-styles很类似，但有其方便之处  
* 除了内置的通用类，支持配置文件 **tailwind.config.js** 增添自定义的基础类或修改覆盖原有的基础类
* 支持使用伪类，如：hover:bg-gray-500，设置鼠标悬停在元素时改变背景色
* 支持响应式设计，如：md:text-lg

## 使用
将Tailwind基础类引入到项目的样式表中，比如：项目的样式在src/styles.css文档
>推荐VSCode插件：Tailwind CSS IntellSense
````js
/*styles.css*/
@tailwind base;
@tailwind components;
@tailwind utilities;
````
如果使用postcss插件或者其他打包工具，如webpack，则使用@import关键字导入
````js
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
````