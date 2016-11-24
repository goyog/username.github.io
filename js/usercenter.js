/**
 * Created by Administrator on 2016/7/6.
 */
$(function(){
    $('#navLie li').hover(function () {
            $(this).addClass('daoHang');
        },function () {
            $(this).removeClass('daoHang');
        }
    )
})
$(function(){
    $('.tab-bar li').click(function(){
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
})
$(function(){
    //点击文本框字消失---最佳写法
    $('.text').focus(function () {
        //console.log(this.defaultValue)
        if ($(this).val() == this.defaultValue) {
            $(this).val('').css('color', '#333');
        }
    }).blur(function () {
        if ($(this).val() == '') {
            $(this).val(this.defaultValue).css('color', '#c9c9c9')
        }
    })
})