# 布局

## Flex布局
传统布局：依赖盒模型 display + position + float，但特殊布局不易实现。

弹性flex： 简便、完整、响应式，设为flex布局后，float、clear、vertical-align失效。


```javascript
采用flex布局的元素 --> flex容器
           子元素 --> flex项目

容器属性： 
    flex-direction
    flex-wrap
    justify-content
    align-items
    align-content
    flex-flow: direction || wrap

项目属性：
    flex-shrink
    flex-grow
    flex-basis
    order
    flex: grow || shrink || basis
```


​	    当 `flex` 取值为 `auto`，则计算值为 1 1 auto，如下是等同的：

```javascript
.item {flex: auto;}
.item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
}
```

​		当 `flex` 取值为一个非负数字，则该数字为 `flex-grow` 值，`flex-shrink` 取 1，`flex-basis` 取 0%，如下是等同的：

```javascript
.item {flex: 1;}
.item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}
```

​		当 `flex` 取值为一个长度或百分比，则视为 `flex-basis` 值，`flex-grow` 取 1，`flex-shrink` 取 1，有如下等同情况（注意 0% 是一个百分比而不是一个非负数字）：

```javascript
.item-1 {flex: 0%;}
.item-1 {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}
.item-2 {flex: 24px;}
.item-1 {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 24px
}
```


## grid网格布局
[grid网格布局](https://www.imooc.com/article/28513)



## 三栏布局
假设高度已知，请写出三栏布局，其中左右栏宽300px,中间自适应


### 圣杯布局
要求：三列布局；中间宽度自适应，两边内容定宽。

好处：重要的内容放在文档流前面可以优先渲染

原理：利用相对定位、浮动、负边距布局，而不添加额外标签

实现方式：

main部分首先要放在container的最前部分。然后是left,right

1.将三者都 float:left , 再加上一个position:relative (因为相对定位后面会用到）

2.main部分 width:100%占满

3.此时main占满了，所以要把left拉到最左边，使用margin-left:-100%

4.这时left拉回来了，但会覆盖main内容的左端，要把main内容拉出来，所以在外围container加上 padding:0 220px 0 200px

5.main内容拉回来了，right也跟着过来了，所以要还原，就对left使用相对定位 left:-200px  同理，right也要相对定位还原 right:-220px

6.到这里大概就自适应好了。如果想container高度保持一致可以给left main right都加上min-height:130px



### 双飞翼布局
原理：主体元素上设置左右边距，预留两翼位置。左右两栏使用浮动和负边距归位。

左翅left有200px,右翅right..220px.. 身体main自适应未知

1.html代码中，main要放最前边，left  right

2.将main  left  right 都float:left

3.将main占满 width:100%

4.此时main占满了，所以要把left拉到最左边，使用margin-left:-100%  同理 right使用margin-left:-220px

（这时可以直接继续上边圣杯布局的步骤，也可以有所改动）

5.main内容被覆盖了吧，除了使用外围的padding，还可以考虑使用margin。

给main增加一个内层div-- main-inner, 然后margin:0 220px 0 200px



### 响应式设计和布局
在不同设备上正常使用，一般主要处理屏幕大小问题
 - 隐藏 + 折行 + 自适应空间
 - rem做单位
 - viewport
   - width=divice-width,
 - 媒体查询

 #### 静态布局：

​	静态（定宽度）布局，也就是设置了min-width，如果小于这个宽度就会出现滚动条，如果大于这个宽度则内容居中外加背景。不管浏览器尺寸具体是多少，网页布局始终按照最初写代码时的布局来显示

#### 流式布局：

​	页面元素的宽度按照屏幕分辨率进行适配调整，但整体布局不变。网页中主要的划分区域的尺寸使用百分数（搭配min-*、max-*属性使用），例如，设置网页主体的宽度为80%，min-width为960px。图片也作类似处理（width:100%, max-width一般设定为图片本身的尺寸，防止被拉伸而失真）。

​	**主要的问题**是如果屏幕尺度跨度太大，那么在相对其原始设计而言过小或过大的屏幕上不能正常显示。

#### 自适应布局：

​	自适应布局的特点是分别为不同的屏幕分辨率定义布局，即创建多个静态布局。屏幕分辨率变化时，页面里面元素的位置会变化而大小不会变化。

#### 响应式布局：

​	糅合了流式布局+弹性布局，再搭配媒体查询技术使用——分别为不同的屏幕分辨率定义布局，同时，在每个布局中，应用流式布局的理念，即页面元素宽度随着窗口调整而自动适配。

#### 弹性布局

​	**包裹文字的各元素的尺寸采用em/rem做单位，而页面的主要划分区域的尺寸仍使用百分数或px做单位**，使用 em 或 rem 单位进行相对布局，相对%百分比更加灵活，同时可以支持浏览器的字体大小调整和缩放等的正常显示。
<br/>