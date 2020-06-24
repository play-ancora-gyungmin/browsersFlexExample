$(function (e) {
    var $body = $('body'),
        $wrap = $('#wrap'),
        $top = $('#top'),
        $menu = $('#menu'),
        $menuBtn = $('#hamburger'),
        $browsers = $('.browsers'),
        $cover = $('.cover'),
        $close = $('#close'),
        easingValue = 'easeInOutExpo'

    $browsers.css({
        flex: '0',
        transition: 'none'
    }).first().css({
        flex: '1'
    })

    function introShow() {
        $browsers.each(function (index, element) {
            setTimeout(function () {
                $(element).css({
                transition: '.9s ease-in-out',
                flex: 1
                })
            },200*index)
        })
    }
    setTimeout(function () {
        introShow()
    },1000)
    
    setTimeout(function () {
        $browsers.removeAttr('style')
        $('.intro-block').remove()
    },3000)

    $menuBtn.click(function (e) {
        $menuBtn.hide()
        $menu.animate({
            left: 0
        }, 600, easingValue)
        $top.animate({
            left: '300px'
        }, 600, easingValue)
        $wrap.animate({
            left: '300px'
        }, 600, easingValue)
        $cover.fadeIn(100).animate({
            left: '300px'
        }, 600, easingValue)

        $menu.find('li').each(function (index, element) {
            $(element).delay(100 * index).animate({
                left: 0
            }, 400, 'easeInOutCubic')
        })
    })

    $cover.mouseenter(function () {
        $close.show()
        $body.css({
            cursor: 'none'
        })
    }).mouseleave(function () {
        $close.hide()
        $body.css({
            cursor: 'default'
        })
    }).mousemove(function (e) {
        var pgX = e.pageX,
            pgY = e.pageY

        $close.css({
            left: (pgX + 5) + 'px',
            top: (pgY + 5) + 'px'
        })
    }).click(function () {
        $menuBtn.show()
        $menu.animate({
            left: '-300px'
        }, 800, easingValue)
        $top.animate({
            left: 0
        }, 600, easingValue)
        $wrap.animate({
            left: 0
        }, 600, easingValue)
        $cover.animate({
            left: 0
        }, 800, easingValue).fadeOut(100)
        $menu.find('li').delay(800).animate({
            left: '-100%'
        }, 100, easingValue)
    })
})
