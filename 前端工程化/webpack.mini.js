(function(modules){
    /*
     module要做的事
     1. 按照顺序执行模块
     2. 存值
     3. 取值
    */
     var installedModules = { } // 缓存模块
     function require(moduleId){
        if(installedModules[moduleId]){
           return installedModules[moduleId]
        }
 
        // 调用Function.protoType的call方法修改this指向，立即自己执行
        var module = installedModules[moduleId] = {
           i: moduleId,
           l: false,  // 是否执行过
           exports:{}  // 当前模块存的值
        }
        modules[moduleId].call(module.exports,module,require);
        module.l = true;
        return module.exports;
     }
     return require(0)
 })([
    function(module,require){
       // a.js
       var name = require(1)
       function getName(){
          console.log(name)
       }
       getName()
    },
 
    function(module,require){
       // b.js
       var name = 'qgq'
       module.exports = name
    }
 ])