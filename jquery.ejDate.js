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

            // 当月的天数
            days,

            // 这个月第一天是星期几
            whatDay,

            // 参数对象
            paras = {
                yearULV: nowDate.getFullYear(),  // 年上限值
                yearDLV: 1970  // 年下限值                         
            };

        // 将配置对象初始化覆盖参数对象的初始值
        if (cfg !== undefined) {
            paras.yearULV = cfg.yearULV || paras.yearULV;
            paras.yearDLV = cfg.yearDLV || paras.yearDLV;
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


            },

            // 初始化渲染Select表单
            initRenderSelect = function () {
                
                var option,i;
                console.log(paras.yearULV + " " +paras.yearDLV);
                // 循环输出年份option
                for(i = paras.yearULV; i >= paras.yearDLV; i--){

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
                tbody.html('');

                // 当月份为二月时，根据闰年还是非闰年判断天数
                if (nowMonth === 2) {
                    days = year % 4 === 0 ? 29 : 28;

                } else if (nowMonth === 1 || nowMonth === 3 || nowMonth === 5 || nowMonth === 7 || nowMonth === 8 || nowMonth === 10 || nowMonth === 12) {
                    // 月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
                    days = 31;
                }
                else {
                    // 其他月份，天数为：30.
                    days = 30;

                }

                
            },

            // 生成月份数据数组
            createMonthDate = function (dateObj) {

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