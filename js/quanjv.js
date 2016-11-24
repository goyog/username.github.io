/**
 * Created by 磊 on 2016/6/29.
 */

$(function(){
    //导航条的效果方法
    $('#navLie li').hover(function () {
        $(this).addClass('daoHang');
    },function () {
        $(this).removeClass('daoHang');
        })
    //顶部收藏方法
    $('#ding a').click(function () {
        $(this).addClass('sPan').siblings().removeClass('sPan');
        alert('收藏成功！')
    })
    //底部悬浮效果
    $('#dibu div').hover(
        function () {
            $(this).addClass('diBu');
        },function () {
            $(this).removeClass('diBu');
        })

    //中部效果侧面栏目
    $('#ce li').hover(
        function () {
            $(this).find('span').show().addClass('ceOn2')
            $(this).addClass('ceOn');

        },function () {
            $(this).find('span').hide();
            $(this).removeClass('ceOn');
        })
    //中间lie的hover特效
    $('#lie li').hover(function () {
        $(this).addClass('lieOn');
    },function () {
        $(this).removeClass('lieOn');
        })


    $('#lie li').hover(function () {
        var a = $(this).index();
        $('#you li').eq(a).show().siblings().hide();
    })



    //焦点图轮播
    var len = $('#you li').length;    //焦点图个数
    var count = 0;
    function banner(){
        if(count == len-1){
            count = -1;
        }
        $('#you li').eq(count).fadeIn('slow').siblings().fadeOut('slow');
        count++;
    }
    function move(){
        timer = setInterval(banner,1500);
    }
    move();
    //功能3：鼠标移入banner停止播放，移除继续播放
    $('#you').hover(function(){
        clearInterval(timer);
    },function(){
        move();
    })
    
    //展示效果
    $('#shang li').hover(function () {
        $(this).addClass('omm').siblings().removeClass('omm');
    })
    $('#shang li').click(function () {
        $(this).addClass('onn').siblings().removeClass('onn');
        })
    //商品图片效果
    $('#zhanShi .box').hover(function () {
        $(this).addClass('onnn');
    },function () {
        $(this).removeClass('onnn');
    })
    //tab选项卡
    $('#shang li').click(function () {
        var index = $(this).index();
        $('#xia div').eq(index).show().siblings().hide();
    })
})
