/*!
 * ejDate 1.0.0
 * https://github.com/stackjie/ejDate.js
 */

(function (window, $, undefined) {
    'use strict';

    $.fn.ejDate = function (cfg) {

        // 保存this
        var that = this;

        // 私有的属性
        var 
            // 保存jquery DOM对象的集合
            elems = {},

            // 当前时间对象
            nowDate = new Date(),

            // 当前的年
            nowYear = nowDate.getFullYear(),

            // 当前的月
            nowMonth = nowDate.getMonth() + 1,

            // 默认参数对象
            defaults = {
                yearULV: nowDate.getFullYear(),  // 年上限值
                yearDLV: 1970  // 年下限值                         
            };

        // 将配置对象初始化覆盖默认参数对象的初始值
        if (cfg !== undefined) {
            defaults.yearULV = cfg.yearULV || defaults.yearULV;
            defaults.yearDLV = cfg.yearDLV || defaults.yearDLV;
        }
       
        // 私有的方法
        var
            init = function () {
                
                // 生成dom节点
                var mainElem = $('<div class="ejdate-main">').html(
                    '<table><caption>\
                        <span class="btn-cut before-date"></span>\
                        <select class="select-year"></select>\
                        <select class="select-month"></select>\
                        <span class="btn-cut after-date"></span>\
                        <thead><tr><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th><th>七</th></tr></thead>\
                        <tbody></tbody><caption></table>'
                );

                that.append(mainElem);

                // 获取将要操作的dom元素
                elems.selectYear = mainElem.find('.select-year'),
                elems.selectMonth = mainElem.find('.select-month'),
                elems.btnBefore = mainElem.find('.before-date'),
                elems.btnAfterDate = mainElem.find('.after-date'),
                elems.tbody = mainElem.find('table tbody');

                // 渲染Select表单
                initRenderSelect();

                renderDate();


            },

            // 初始化渲染Select表单
            initRenderSelect = function () {
                
                var option,i;
                // 循环输出年份option
                for(i = defaults.yearULV; i >= defaults.yearDLV; i--){

                    option = $('<option>' + i + '年</option>').val(i);

                    // 如果为当前年设置为选中状态
                    if(i === nowYear){
                        option[0].selected = true;
                    }

                    elems.selectYear.append(option);
                }

                // 循环输出月份option
                for(i = 1; i <= 12; i++){

                    option = $('<option>' + i + '月</option>').val(i);

                    // 如果为当前月设置为选中状态
                    if(i === nowMonth){
                        option[0].selected = true;
                    }

                    elems.selectMonth.append(option);
                }
            },

            // 渲染日期数据
            renderDate = function () {
                
                // 重置tbody
                elems.tbody.html('');

                console.log(createDaysDate(nowDate));

                
            },

            // 生成月份天数数据数组
            createDaysDate = function (dateObj) {

                var
                    // 当月的天数
                    nowDays = getDays(nowYear,nowMonth),
                    
                    // 上个月的天数
                    lastDays = getDays(nowYear,nowMonth - 1),

                    // 保存这个月第一天是星期几
                    whatDay = new Date(nowYear,nowMonth - 1,1).getDay(),

                    // 保存上月末尾的天数总和
                    lastDaysEnd = 6 - (7 - whatDay),

                    // 生成的天数数据数组  
                    daysArray = [],

                    // 保存上个月末尾天数的起始天数
                    startLastDaysEnd = lastDays - lastDaysEnd,

                    i;

                    console.log(startLastDaysEnd);

                   // 产生上月末尾的天数
                   for (i = 0; i < lastDaysEnd; i++) {
                       daysArray[i] = startLastDaysEnd + i + 1;
                   }

                   // 产生本月的天数
                   for (i = 1; i <= nowDays; i++) {
                       daysArray.push(i);
                   }

                   // 产生余下的下月天数
                   for (i = 1; daysArray.length < 42; i++) {
                       daysArray.push(i);
                   }

                   return daysArray;
                    
            },

            // 获取某个月共有几天
            getDays = function (year,month) {
                
                var days;
                // 当月份为二月时，根据闰年还是非闰年判断天数
                if (month === 2) {
                    days = year % 4 === 0 ? 29 : 28;

                } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
                    // 月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
                    days = 31;
                }
                else {
                    // 其他月份，天数为：30.
                    days = 30;

                }

                return days;
            },

            // 更新Selec表单选中项
            updateSelected = function () {

                elems.selectYear.find('option').each(function(){
                    if($(this).text() == year + '年'){
                        $(this)[0].selected = true;
                    }
                });

                elems.selectMonth.find('option').each(function(){
                    if($(this).text() == month + '月'){
                        $(this)[0].selected = true;
                    }
                });
            };

        // 对外提供的api
        $.extend(this, {
            
            getDate: function () {

            },

            setDate: function () {

            }
        });

        // 执行初始化函数
        init();
    }

})(window, jQuery);