//Copyright (c) 2016.10 恒创伟业.杨惠超. All rights reserved.
;
(function($, window, document, undefined) {
    //
    var TrClick = function(el, opt) {
        this.$element = el,
            this.defaults = {
                'firstColor': '#ffffff', //白色
                'sencondColor': '#e2e2e2', //淡灰
                'clickColor': '#f3b18d' //橙

            },
            this.options = $.extend({}, this.defaults, opt)
    }
    TrClick.prototype = {
        setDefaultColor: function() {
            for (var i = 0; i < this.$element.length; i++) {
                if (i % 2 == 0) {
                    $(this.$element[i]).children("td").css('background', this.options.firstColor);
                } else {
                    $(this.$element[i]).children("td").css('background', this.options.sencondColor);
                }
            }
        },
        changeColor: function() {
            var options = this;
            this.$element.click(function() {
                $(this).parent().find('tr').each(function(i, item) {
                    if (i % 2 == 0) {
                        $(item).children("td").css('background', options.options.firstColor);
                    } else {
                        $(item).children("td").css('background', options.options.sencondColor);
                    }
                });
                $(this).children("td").css('background', options.options.clickColor);
                $(".trclick-tempvalue").val('123');
            });

        }
    }
    $.fn.trclick = function(options) {

        //创建实体
        var trclick = new TrClick(this, options);
        //暂存数据
        $("body").append("<input type='hidden' value='1' class='trclick-tempvalue' />")
            //调用其方法
        trclick.setDefaultColor();
        alert(trclick.changeColor());
    }
})(jQuery, window, document);

function GetTrclickValue() {
    //alert(1);
    return $(".trclick-tempvalue").val();
}