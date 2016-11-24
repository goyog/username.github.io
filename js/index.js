
//导航条的效果方法
$(function(){
    $('.hd2 li').hover(function () {
        $(this).toggleClass('gl')
    }).click(function () {
        var index = $(this).index();
        $('.xxk').eq(index).show().siblings().hide();
    });


    $('.hd2 li a').hover(function () {
        $(this).toggleClass('gl')
    });


    $('.second li').hover(function () {
        $(this).toggleClass('gll')
    });


    $('.first').click(function () {
        $('.second').slideUp();
        $(this).find('i').addClass('spin');
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
            $(this).find('i').removeClass('spin');
        }
    });


    $('.yx').bind({
        focus:function(){
            if (this.value == this.defaultValue){
                this.value="";
                $(this).css('color','#000');
            }
        },
        blur:function(){
            if (this.value == ""){
                this.value = this.defaultValue;
                $(this).css('color','#888');
            }
        }
    });
    

    var len = $('.banner-ul li').length;
    var count = 0;
    $('.banner-ul li:gt(0)').hide();
    $('.banner-span span').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        $('.banner-ul li').eq(index).fadeIn('slow').siblings().fadeOut('slow');
    });

    function banner() {
        if (count == len - 1) {
            count = -1;
        }
        $('.banner-ul li').eq(count).fadeIn('slow').siblings().fadeOut('slow');
        $('.banner-span span').eq(count).addClass('on').siblings().removeClass('on');
        count++;
    }

    function move() {
        timer = setInterval(banner, 1500);
    }

    move();
    $('.hair2').hover(function () {
        clearInterval(timer);
    }, function () {
        move();
    });


    //导航高亮
    $('.tab-bar li').hover(function(){
        $(this).addClass('on')                //当前li高亮
            .siblings().removeClass('on');    //其他同辈li取消高亮
        //获取当前元素的索引
        var index = $(this).index();
        //利用索引将li和div联系起来
        $('.tab-box div').eq(index).show()  //对应的内容显示
            .siblings().hide();              //其他同辈div隐藏
    });
    $('.xx4 li:even').css('background','#dfdfdf');
    $('.xx4 span').addClass('shu');
    $('#weijj').click(function(){
        $('.wenti').slideDown(1000)
    });
    $('#jiejue').click(function(){
        $('.wenti').slideUp(1000)
    });
    $('#sjd .add').hover(function () {
        $(this).next().slideToggle('slow');
    });
    $('#sjd .ioss').hover(function () {
        $(this).next().slideToggle('siow')
    });


    $('#goTop').click(function(){
        //自定义动画
        $('html,body').animate({scrollTop:0},'fast');
    });

    $('#gg span').click(function () {
        $(this).parent().hide();
    });


    $('.one h1').click(function () {
        $(this).next().slideToggle('slow');
        $(this).find('.iocn').toggleClass('jian');
    }).hover(function () {
            $(this).addClass('on');
        },function () {
            $(this).removeClass('on');
        }
    );

    $('.dhz .bai').click(function () {
        $(this).toggleClass('bb').parents('.dhz').next().toggle();
    });


    $('.dhy .hao').click(function () {
        $(this).parents('.dhy').next().toggle();
    });

    $('.dingd a').hover(function () {
        $(this).toggleClass('cs');
    });

    $('.dhy li:last').click(function () {
        alert('收藏成功');
    });

    $('#zxkf i').click(function () {
        $(this).parent().hide();
    });


    $('#zxkf').click(function () {
        $('.box1').fadeToggle('fast');
    });
    
    $('.hez dl').hover(function () {
        $(this).toggleClass('bjs');
    });

    // 搜索框效果
    $(".bodys p").not(":first").hide();
    $(".searchbox ul li").mouseover(function(){
        var index = $(this).index();
        if(index==0){
            $(this).find("a").addClass("style1");
            $(".searchbox ul li").eq(1).find("a").removeClass("style2");
            $(".searchbox ul li").eq(2).find("a").removeClass("style3");
        }
        if(index==1){
            $(this).find("a").addClass("style2");
            $(".searchbox ul li").eq(0).find("a").removeClass("style1");
            $(".searchbox ul li").eq(2).find("a").removeClass("style3");
        }
        if(index==2){
            $(this).find("a").addClass("style3");
            $(".searchbox ul li").eq(0).find("a").removeClass("style1");
            $(".searchbox ul li").eq(1).find("a").removeClass("style2");
        }
        $(".bodys p").eq(index).show().siblings().hide();
    });

});
function clock() {
    var today = new Date();
    var tYear = today.getFullYear();
    var tMonth = today.getMonth() + 1;
    var tDate = today.getDate();
    var hh = today.getHours();
    var mm = today.getMinutes();
    var ss = today.getSeconds();
    if(hh>12){
        hh-=12;
        var s ="PM";
    }else {
        s="AM";
    }
    var str = "星期";
    var week =today.getDay();
    switch (week) {
        case 0 :
            str += "日";
            break;
        case 1 :
            str += "一";
            break;
        case 2 :
            str += "二";
            break;
        case 3 :
            str += "三";
            break;
        case 4 :
            str += "四";
            break;
        case 5 :
            str += "五";
            break;
        case 6 :
            str += "六";
            break;
    }
    document.getElementById("demo").innerHTML = "现在是" + hh + ":" + mm + ":" + ss +"&nbsp"+s+ "&nbsp" + str + "<br/>"
}
var timer = setInterval("clock()",1000);

