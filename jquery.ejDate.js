/*!
 * ejDate 1.0.0
 * https://github.com/stackjie/ejDate.js
 */

(function (window, $, undefined) {
    'use strict';

    $.fn.ejDate = function (cfg) {

        // 私有的属性

        $.extend(this, {

            init: function () {
                
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

                this.append(mainElem);

                // 获取将要操作的dom元素
                var 
                    selectYear = mainElem.find('.select-year'),
                    selectMonth = mainElem.find('.select-month'),
                    btnBefore = mainElem.find('.before-date'),
                    btnAfterDate = mainElem.find('.after-date'),
                    tbody = mainElem.find('table tbody');
               

            },

            
        });

        // 执行初始化函数
        this.init();
    }

})(window, jQuery);