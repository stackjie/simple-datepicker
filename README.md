![logo](http://ww4.sinaimg.cn/large/7d528769gw1fa38h6e3zkj20fa0bhq35.jpg)
# ejDate.js
一个简单、易用的的日期选择组件
##如何使用
ejDate.js依赖jquery，必须先引入jquery，并将本项目下的dist文件夹内的jquery.ejDate.min.css和jquery.ejDate.min.js引入。
###初始化
首先将需要应用的text表单放入一个class为`ejdate-wrap`的div容器中，并赋予id属性。
```
<div class="ejdate-wrap" id="demo_ejdate">
    <input type="text">
</div>
```
使用jquery选择器获取到div容器后执行ejDate()构造函数并传入配置参数。
```
$('#demo_ejdate').ejDate({
    yearULV:2020,  // 设置年份的上限值
    yearDLV:1970,  // 设置年份的下限值
    disabledDateReg:/2016y10m((11d)|(15d))/,  //筛选不可选日期的正则
    checkedDateFunc:function(date){  // 选中日期后执行的回调函数
        console.log(date);
    }
});
```
![demo](http://ww4.sinaimg.cn/large/7d528769gw1fa38upr5gwj20ab0bc0tb.jpg)
###配置对象
- `yearULV` 年份的上限值，如果指定该属性，ejDate.js会根据该值限制年份的上限，如果不指定年份的上限为今年


