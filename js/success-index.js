/*大图轮播*/

//需要获得的元素
//1、获得所有大图的集合      pics
//2、获得所有大li标签的集合    blis
//3、获得所有小li标签的集合   和 i的集合    slis   slii
//4、获得左右按钮   

//需要考虑的事件以及事件联动
//3、小i图标总是与大图相对应
//1、点击左右按钮  大图切换  大li上面的小i图标切换同时对应相应的大li背景改变  !!!!记得清除定时器
//2、鼠标放在大li上面  显示小li列表
//4、鼠标放在小li上切换图片
//5、每隔一秒切换一次图片 同时对应相应的大li  和小li 和i

$(document).ready(function(){
//获得元素
    var pics = $('#main_pic .banner-pic ul li');
    var blis = $('#main_pic .banner-ctrl li'); 
    var slii = $('#main_pic .banner-ctrl li .ctrl-dot i');
    var slip = $('#main_pic .banner-ctrl li .title-item .title-list p');
    var lbtn = $('#content-middle #main_pic .banner-prev');
    var rbtn = $('#content-middle #main_pic .banner-next');
    var bbg = $('#content-middle')
//  alert(lbtn.length);
//  alert(slis.length);
    //把几个条件关联一起的变量
    var index=0;
    var arr=['#7701A1','#99CCE1','#9D5CFE','#FFFFFF','#EBEFFB','#6539E6','#FDAB01','#DD073B','#478FFE','#CE46CE','#5E21BD','#EB1587','#1A192B','#FF0E3E','#FFB500','#F5091D','#478FFE']
    //定义一个每秒运行的函数轮播图片
	function chan(){
	//pics.eq(index).parent('#main_pic .banner-pic').find('li').eq(index).siblings('li').css('display','none');
		pics.css('display','none');
	//console.log(pics.find('li').size());
		pics.eq(index).css('display','block');
		//让小按钮变成黄色
		slii.removeClass('yellow');		
		slii.eq(index).addClass('yellow');
		//选中这个li标签
		slii.parent().removeClass('current');		
		slii.eq(index).parent().addClass('current');
		//让li标签宽度变高同时改变成选中的颜色
		slii.parents('li').find('.bg').removeClass('current');
		slii.eq(index).parents('li').find('.bg').addClass('current');
		//让最外面背景改变
		bbg.css('background',arr[index]);
	    index+=1;
	    if(index>=pics.length){index=0};
	  
	}
	timer = setInterval(chan,2000);
	
//点击效果  点击之后大图切换

	lbtn.click(function(){
		//点击之后清空定时器
		clearInterval(timer);
		//通过判断使其自增同时改变图片
		
		if(index==0){index=pics.length};
		index--;
		bbg.css('background',arr[index]);
		pics.css('display','none');
		pics.eq(index).css('display','block');
/*使下面li变化*/
		//让小按钮变成黄色
		slii.removeClass('yellow');		
		slii.eq(index).addClass('yellow');
		//选中这个li标签
		slii.parent().removeClass('current');		
		slii.eq(index).parent().addClass('current');
		//让li标签宽度变高同时改变成选中的颜色
		slii.parents('li').find('.bg').removeClass('current');
		slii.eq(index).parents('li').find('.bg').addClass('current');
		
	});
	
	rbtn.click(function(){
		//点击之后清空定时器
		clearInterval(timer);
		//通过判断使其自增同时改变图片
		if(index==pics.length){index=0};
		bbg.css('background',arr[index]);
		pics.css('display','none');
		pics.eq(index).css('display','block');
/*使下面li变化*/
		//让小按钮变成黄色
		slii.removeClass('yellow');		
		slii.eq(index).addClass('yellow');
		//选中这个li标签
		slii.parent().removeClass('current');		
		slii.eq(index).parent().addClass('current');
		//让li标签宽度变高同时改变成选中的颜色
		slii.parents('li').find('.bg').removeClass('current');
		slii.eq(index).parents('li').find('.bg').addClass('current');
		//先运行代码后让其自增
		index++;
		
	});



//鼠标在大图时候暂停定时器
    $('.banner-pic').mouseenter(function(){
		clearInterval(timer);
	});
	$('.banner-pic').mouseleave(function(){
		timer = setInterval(chan,2000);
	});
//鼠标放在li标签时  让li被选中current状态
	blis.mouseenter(function(){
		//鼠标移上去清除定时器
		clearInterval(timer);
		//清除自动动时候的li及其子元素上的样式
		slii.parent().removeClass('current');
		slii.parents('li').find('.bg').removeClass('current');
		//给li加上相应的鼠标移入事件

		$(this).addClass('mouse-hover').siblings().removeClass('mouse-hover');
		$(this).find('.title-item p:first-child i').addClass('yellow');
		//找到class为yellow的i 确认他现在的下标值 赋值给index并更改图片
        index=$(this).data('num');
        bbg.css('background',arr[index]);
        pics.css('display','none');
		pics.eq(index).css('display','block');

	});
	blis.mouseleave(function(){
		//鼠标开始定时器
		clearInterval(timer);
		$(this).find('.title-item p:last-child i').removeClass('yellow');
		timer = setInterval(chan,2000);
		$(this).removeClass('mouse-hover');
		$(this).find('.bg').addClass('current');
		$(this).find('.ctrl-dot').addClass('current');
		slii.eq(index).addClass('yellow');
	});

})
$(function(){
    $('#navLie li').hover(function () {
            $(this).addClass('daoHang');
        },function () {
            $(this).removeClass('daoHang');
        }
    )
})

$(function(){
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
})
$(function(){
    //二维数组储存市级信息
    var cities = [
        ['朝阳区','海淀区','东城区','西城区'],    //北京市  cities[0]
        ['太原市','大同市','临汾市','运城市'],              //山西省  cities[1]
        ['西安市','渭南','延安','宝鸡市'],    //陕西省  cities[2]
        ['石家庄市','唐山市','邯郸市','保定市']   //河北省  cities[3]
    ];
    //change事件，适用表单元素，当元素内容发生变化时会触
    $('#province').change(function(){
        //技巧：省级选项value值和市级元素的索引一致
        var $proVal = $(this).val();
        var $cityOpt = '';    //存储市级元素，必须赋空值
        //遍历数组，将$proVal和二维数组的菜单一一对应
        for(var i in cities[$proVal]){
            //动态生成<option>
            $cityOpt = $cityOpt + '<option>'+cities[$proVal][i]+'</option>';
        }
        //将生成的<option>写在页面中---塞进DOM树中
        $('#city').html($cityOpt);
    })
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