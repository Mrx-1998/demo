# calc() 函数用于动态计算长度值
1. 需要注意的是，运算符前后都需要保留一个空格，例如：width: calc(100% - 10px)
2. 任何长度值都可以使用calc()函数进行计算
3. calc()函数支持 "+", "-", "*", "/" 运算
4. calc()函数使用标准的数学运算优先级规则

# flex
1. 设为Flex布局以后，子元素的float、clear和vertical-align属性将失效

1. flex-direction 属性决定主轴的方向（即项目的排列方向）。
row（默认值）：主轴为水平方向，起点在左端。
row-reverse：主轴为水平方向，起点在右端。
column：主轴为垂直方向，起点在上沿。
column-reverse：主轴为垂直方向，起点在下沿。

2. flex-wrap 默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行
nowrap（默认）：不换行。
wrap：换行，第一行在上方
wrap-reverse：换行，第一行在下方。

3. flex-flow
flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
flex-flow: <flex-direction> <flex-wrap>;

4. justify-content
justify-content属性定义了项目在主轴上的对齐方式。
flex-start（默认值）：左对齐
flex-end：右对齐
center： 居中
space-between：两端对齐，项目之间的间隔都相等。
space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

5. align-items
align-items属性定义项目在交叉轴上如何对齐。
flex-start：交叉轴的起点对齐。
flex-end：交叉轴的终点对齐。
center：交叉轴的中点对齐。
baseline: 项目的第一行文字的基线对齐。
stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

6. align-content
align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
flex-start：与交叉轴的起点对齐。
flex-end：与交叉轴的终点对齐。
center：与交叉轴的中点对齐。
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
stretch（默认值）：轴线占满整个交叉轴。


# 让所有弹性盒模型对象的子元素都有相同的长度，且忽略它们内部的内容：

#main div
{
    flex:1;
}