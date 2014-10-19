$(document).ready(function() {
    function flip() {
        // 初始化
        $(".flip").each(function(index) {
            var _this = $(this);
            _this.css({
                'height': _this.children(".front").height()
            });
        });

        // 打开
        function open(element) {
            element.removeClass("flipToFront");
            element.addClass("flipToBack");
            setTimeout(function() {
                element.children(".front").hide();
            }, 300)

            element.css({
                'height': element.children(".back").height()
            });
            setTimeout(function() {
                element.children(".back").show();
                element.animatescroll({
                    scrollSpeed: 1500,
                    padding: 60,
                    onScrollEnd: function() {}
                });
            }, 200)
        }

        // 关闭
        function close(element) {
            element.removeClass("flipToBack");
            element.addClass("flipToFront");
            setTimeout(function() {
                element.children(".back").hide();
            }, 250);

            element.css({
                'height': element.children(".front").height()
            });
            setTimeout(function() {
                element.children(".front").show();
            }, 200);
        }


        // 点击响应
        var _oldthisnum = -1;
        var isopen = 0;
        $(".flip").click(function() {
            var _this = $(this);
            if (isopen == 0) {
                open(_this);
                isopen = 1;
                _oldthisnum = _this.index();
            } else {
                if (_oldthisnum == _this.index()) {
                    close(_this);
                    isopen = 0;
                } else {
                    close($(".flip").eq(_oldthisnum));
                    setTimeout(function() {
                        open(_this);
                    }, 510);
                }
                _oldthisnum = _this.index();
            }
        });
    }
    flip();
});