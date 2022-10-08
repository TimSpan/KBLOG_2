---
title: es6模块化
description: es6模块化
date: 2022-09-03
tags:
  - ES6module
---
# ES6模块化

## 前言

历史上,JavaScript 一直没有模块 module 体系,无法将一个大程序拆分成互相依赖的小文件,再用简单的方法拼装起来。其他语言都有这项功能，比如 Ruby 的require、Python 的import,甚至就连 CSS 都有@import,但是 JavaScript 任何这方面的支持都没有,这对开发大型的、复杂的项目形成了巨大障碍。

在 ES6 之前,社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。ES6 在语言标准的层面上,实现了模块功能，而且实现得相当简单,完全可以取代 CommonJS 和 AMD 规范,成为浏览器和服务器通用的模块解决方案。

ES6 模块的设计思想是尽量的静态化,使得编译时就能确定模块的依赖关系,以及输入和输出的变量。CommonJS 和 AMD 模块,都只能在运行时确定这些东西。比如,CommonJS 模块就是对象,输入时必须查找对象属性。

除了静态加载带来的各种好处，ES6 模块还有以下好处。

1. 不再需要`UMD`模块格式了,将来服务器和浏览器都会支持 ES6 模块格式。目前,通过各种工具库，其实已经做到了这一点。
2. 将来浏览器的新 API 就能用模块格式提供,不再必须做成全局变量或者navigator对象的属性。
3. 不再需要对象作为命名空间（比如`Math`对象）,未来这些功能可以通过模块提供。

## 语法



### ES6模块化规定

- 每个js文件都是一个独立的模块
- 导入其他模块成员使用 `import` 关键字
- 向外共享成员使用 export 关键字

### 在node.js中使用ES6 模块化

在package.json文件中添加 `"type":"module"` 节点

或者也可以用另外一种形式：

1. 初始化package.json: `npm init -y`
2. 安装插件：`npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node`
3. 安装第二波插件：`npm install --save @babel/polyfill`
4. 在项目根目录中创建一个 `babel.config.js` 文件，代码如下：

```js
  const presets = [
      [
         "@babel/env",{
            targets:{
               edge:"17",
               firefox:"60",
               chrome:"67",
               safari:"11.1"
            }
         }
      ]
      
   ]
   module.exports = {
      presets
   }
```

使用特定命令运行js文件：`npx babel-node ./index.js`

### ES6默认导出和导入

### 导出export 

`export default`

### 导入import

使用`export`命令定义了模块的对外接口以后，其他 JS 文件就可以通过`import`命令加载这个模块。

```js
import 接受名称 from ' 模块标识符 '
```

### 导出和导入

> 每个模块中,只允许使用唯一的一次 `export default`.否则会报错

### 按需导入

大括号字面量

```js
import { createApp } from 'vue'
import { Button } from 'vant'
import { Swipe, SwipeItem } from 'vant'
```



# Module的加载实现



### 1_浏览器加载



HTML 网页中，浏览器通过`<script>`标签加载 JavaScript 脚本。

```html
<!-- 页面内嵌的脚本 -->
<script type="application/javascript">
  // module code
</script>

<!-- 外部脚本 -->
<script type="application/javascript" src="path/to/myModule.js">
</script>
```

上面代码中，由于浏览器脚本的默认语言是 JavaScript，因此`type="application/javascript"`可以省略。

默认情况下，浏览器是同步加载 JavaScript 脚本，即渲染引擎遇到`<script>`标签就会停下来，等到执行完脚本，再继续向下渲染。如果是外部脚本，还必须加入脚本下载的时间。

如果脚本体积很大，下载和执行的时间就会很长，因此造成浏览器堵塞，用户会感觉到浏览器“卡死”了，没有任何响应。这显然是很不好的体验，所以浏览器允许脚本异步加载，下面就是两种异步加载的语法。

```html
<script src="path/to/myModule.js" defer></script>
<script src="path/to/myModule.js" async></script>
```

上面代码中，`<script>`标签打开`defer`或`async`属性，脚本就会异步加载。渲染引擎遇到这一行命令，就会开始下载外部脚本，但不会等它下载和执行，而是直接执行后面的命令。

`defer`与`async`的区别是：`defer`要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；`async`一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，`defer`是“渲染完再执行”，`async`是“下载完就执行”。另外，如果有多个`defer`脚本，会按照它们在页面出现的顺序加载，而多个`async`脚本是不能保证加载顺序的。

浏览器加载 ES6 模块，也使用`<script>`标签，但是要加入`type="module"`属性。

```html
<script type="module" src="./foo.js"></script>
```

上面代码在网页中插入一个模块`foo.js`，由于`type`属性设为`module`，所以浏览器知道这是一个 ES6 模块。

浏览器对于带有`type="module"`的`<script>`，都是异步加载，不会造成堵塞浏览器，即等到整个页面渲染完，再执行模块脚本，等同于打开了`<script>`标签的`defer`属性。

```html
<script type="module" src="./foo.js"></script>
<!-- 等同于 -->
<script type="module" src="./foo.js" defer></script>
```

如果网页有多个`<script type="module">`，它们会按照在页面出现的顺序依次执行。


```html
<script type="module" src="./foo.js" async></script>
```

一旦使用了`async`属性，`<script type="module">`就不会按照在页面出现的顺序执行，而是只要该模块加载完成，就执行该模块。

ES6 模块也允许内嵌在网页中，语法行为与加载外部脚本完全一致。

### 2_ESM与CommenJS的差异

讨论 Node.js 加载 ES6 模块之前，必须了解 ES6 模块与 CommonJS 模块完全不同。

它们有三个重大差异。

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
- CommonJS 模块的`require()`是同步加载模块，ES6 模块的`import`命令是异步加载，有一个独立的模块依赖的解析阶段。

第二个差异是因为 CommonJS 加载的是一个对象（即`module.exports`属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令`import`，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 的`import`有点像 Unix 系统的“符号连接”，原始值变了，`import`加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

### 3_Node.js的模块加载方法

JavaScript 现在有两种模块。一种是 ES6 模块，简称 ESM；另一种是 CommonJS 模块，简称 CJS。

CommonJS 模块是 Node.js 专用的，与 ES6 模块不兼容。语法上面，两者最明显的差异是，CommonJS 模块使用`require()`和`module.exports`，ES6 模块使用`import`和`export`。

它们采用不同的加载方案。从 Node.js v13.2 版本开始，Node.js 已经默认打开了 ES6 模块支持。

Node.js 要求 ES6 模块采用`.mjs`后缀文件名。也就是说，只要脚本文件里面使用`import`或者`export`命令，那么就必须采用`.mjs`后缀名。Node.js 遇到`.mjs`文件，就认为它是 ES6 模块，默认启用严格模式，不必在每个模块文件顶部指定`"use strict"`。

如果不希望将后缀名改成`.mjs`，可以在项目的`package.json`文件中，指定`type`字段为`module`。

```javascript
{
   "type": "module"
}
```

一旦设置了以后，该项目的 JS 脚本，就被解释成 ES6 模块。

::: tip 注意 .cjs文件

如果这时还要使用 CommonJS 模块，那么需要将 CommonJS 脚本的后缀名都改成`.cjs`。如果没有`type`字段，或者`type`字段为`commonjs`，则`.js`脚本会被解释成 CommonJS 模块。

总结为一句话：`.mjs`文件总是以 ES6 模块加载，`.cjs`文件总是以 CommonJS 模块加载，`.js`文件的加载取决于`package.json`里面`type`字段的设置。

:::

注意，ES6 模块与 CommonJS 模块尽量不要混用。`require`命令不能加载`.mjs`文件，会报错，只有`import`命令才可以加载`.mjs`文件。反过来，`.mjs`文件里面也不能使用`require`命令，必须使用`import`。



### 4_同时支持两种格式的模块

一个模块同时要支持 CommonJS 和 ES6 两种格式，也很容易。

如果原始模块是 ES6 格式，那么需要给出一个整体输出接口，比如`export default obj`，使得 CommonJS 可以用`import()`进行加载。

如果原始模块是 CommonJS 格式，那么可以加一个包装层。

```javascript
import cjsModule from '../index.js';
export const foo = cjsModule.foo;
```

上面代码先整体输入 CommonJS 模块，然后再根据需要输出具名接口。

你可以把这个文件的后缀名改为`.mjs`，或者将它放在一个子目录，再在这个子目录里面放一个单独的`package.json`文件，指明`{ type: "module" }`。

另一种做法是在`package.json`文件的`exports`字段，指明两种格式模块各自的加载入口。

```javascript
"exports"：{
  "require": "./index.js"，
  "import": "./esm/wrapper.js"
}
```

上面代码指定`require()`和`import`，加载该模块会自动切换到不一样的入口文件。

### 5_加载路径

ES6 模块的加载路径必须给出脚本的完整路径，不能省略脚本的后缀名。`import`命令和`package.json`文件的`main`字段如果省略脚本的后缀名，会报错。
