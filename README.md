![logo](http://ww4.sinaimg.cn/large/7d528769gw1fa38h6e3zkj20fa0bhq35.jpg)
# ejDate.js
一个简单、易用的的日期选择组件
##如何使用
ejDate.js依赖jquery，必须先引入jquery，并将本项目下的dist文件夹内的jquery.ejDate.min.css和jquery.ejDate.min.js引入。
###初始化
首先将需要应用的text表单放入一个class为`ejdate-wrap`的div容器中，并赋予id属性。
```html
<div class="ejdate-wrap" id="demo_ejdate">
    <input type="text">
</div>
```
使用jquery选择器获取到div容器后执行ejDate()构造函数并传入配置参数。
```javascript
$('#demo_ejdate').ejDate({
    yearULV:2020,  // 设置年份的上限值
    yearDLV:1970,  // 设置年份的下限值
    disabledDateReg:/2016y10m((11d)|(15d))/,  //筛选禁用日期的正则
    checkedDateFunc:function(date){  // 选中日期后执行的回调函数
        console.log(date);
    }
});
```
![demo](http://ww4.sinaimg.cn/large/7d528769gw1fa38upr5gwj20ab0bc0tb.jpg)
###配置对象
####yearULV
年份的上限值，如果指定该属性，ejDate.js会根据该值限制年份的上限，如果不指定上限默认为今年
####yearDLV
年份的下限值，作用同上，不指定下限值默认为1970年
####disabledDateReg
禁用日期的正则表达式，ejDate.js会根据你传入的正则表达式来筛选日期
`2016y6m6d`正则表达式需要根据该格式的字符串来编写，y代表年，m为月d为日。
在ejDate.js生成日期时都会生成这么一个对应的字符串，根据你传入的正则表达式来匹配该字符串，如果能匹配，字符串对应的日期将会被禁用。
####checkedDateFunc
选中日期后执行的回调函数，可以接受date参数，date参数为选中的日期，是一个JavaScript原生日期对象
###API
执行ejDate()构造函数后会返回一个ejDate对象，ejDate对象提供了一些简单的api
####getDate()
获取选中的日期，返回一个JavaScript日期对象
####setDate(year,month,day)
设置选中的日期，需要传入年月日三个参数



