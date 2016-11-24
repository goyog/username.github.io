/**
 * Created by 环 on 2016/6/30.
 */
$(function() {
    $('input[type=text]').attr('disabled', 'disabled');
    $('.left li span').click(function () {
        $(this).next().toggle();
        });
    $('.left li img').bind('click',function(){
        var m = confirm('是否将该物品放入购物车？');
        if (m) {
            var src1 =$(this).attr('src');
            var price=$(this).attr('alt');
            var $newnode = $('<tr>'+
                '<td class="car1"><input type="checkbox" checked="checked"/>选中</td>'+
                '<td class="car2"><img src=""alt=""/></td>'+
                ' <td class="car3"><img class="minus" src="images/taobao_minus.jpg" alt="minus"/> <input type="text" value="1"/><img class="adding" src="images/taobao_adding.jpg" alt="add"/></td>'+

                ' <td class="car4"></td>'+
                ' <td class="car5"><a href="javascript:void(0);">删除</a></td>');
            $('table').append($newnode);
            $('tr:last').children().first().next().find('img').attr('src',src1);
            $('tr:last').children().first().next().next().next().text(price);
        }
    })
    function changeNumber(dom, flag) {
        var $input = $(dom).parent().find("input");
        var value = $input.val();
        if (flag) {
            value++;
        } else {
            value--;
            if (value <= 0) {
                value = 1;
                alert("宝贝数量必须大于0");
            }
        }
        $input.val(value);
        productCount();
    };
    //点击增加.live('click',function(){
    $(".car3").find("img[alt='minus']").live('click',function(){
        changeNumber(this, false);
    });
    //点击减少
    $(".car3").find("img[alt='add']").live('click',function(){
        changeNumber(this, true);
    })
    $('.car5').live('click',function(){

        $(this).parent().remove();
        productCount();
    });
    $('#buy').click(function(){
        productCount()
    })
    function productCount() {
        var $tr = $(".car").find("tr");
        var summer = 0;
        $tr.each(function (i, dom) {
            var checked = $(dom).children(".car1").children().is(":checked");
            if (checked) {
                var num = $(dom).children(".car3").find("input").val();//商品数量
                var price = num * $(dom).children(".car4").text();//商品小计
                summer += price;//总价
            }
        })
        $("#price").val(summer);

    }
})