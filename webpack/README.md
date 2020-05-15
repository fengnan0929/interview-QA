### webpack简介

`webpack`是一个前端模块化打包工具，最开始它只能打包JS文件，但是随着webpack的发展，他还能打包如CSS、图片等文件。主要由入口，出口，loader，plugins四个部分。

特点:
- 利用loader处理各种类型的静态资源。
- 对js/css/图片资源文件支持打包
- 可以将代码分割，按需加载。
- 具有强大的plugin接口，扩展webpack功能。

### webpack与grunt、gulp的不同
`webpack`与gulp、grunt没有什么可比性，它可以看作模块打包机，通过分析你的项目结构，找到js模块以及其他的一些浏览器不能直接运行的扩展语言（Scss、Typescript等），并将其转换和打包为合适的格式供浏览器使用。Gulp/grunt是一种能够优化前端流程的工具，而Webpack是一种模块化的解决方案，不过webpack的优点使得很多场景下可以替代gulp/grunt类的工具。

`Grunt和gulp`的工作方式是在一个配置文件中，指明对某些文件进行类似编译、组合、压缩等任务的具体步骤，工具之后可以自动完成这些任务。

Webpack的工作方式是：把项目当作一个整体，通过一个给定的主文件（如index.js), Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loader来处理它们，最后打包为一个或多个浏览器可解析的js文件。
 
### [模块化](模块化.md)

### [安装](安装.md)

### [webpack基本配置文件](webpack配置文件.md)

### [Loader](loader.md)

### [package-lock.json](./package-lock.json.md)