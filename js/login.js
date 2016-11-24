/**
 * Created by Administrator on 2016/7/6.
 */
$(function(){
    /*为每一个文本框编写验证函数*/
    //用户名验证
    function checkName(){
        if(document.forms[0].name.value=="党富平"){
            $('#name-msg').html('');
            return true;
        }
        $('#name-msg').html('用户名输入格式不正确!');
        return false;
    }
    //密码验证函数
    function checkPsw(){
        if(document.forms[0].psw.value=="1314011352"){
            $('#psw-msg').html('');
            return true;
        }
        $('#psw-msg').html('提示：密码为学号');
        return false;
    }
    //用户类型验证函数
    function checkType(){
        if(document.forms[0].type.value=="管理员"){
            $('#type-msg').html('');
            return true;
        }
        $('#type-msg').html('请选择正确的登录身份!');
        return false;
    }
    /*为每一个文本框添加失焦事件，失焦时调用验证函数*/
    $('#psw').blur(checkPsw);
    $('#name').blur(checkName);
    $('#type').blur(checkType);

    /*给整个表单<form>添加submit事件----当提交表单时，触发submit事件*/
    $('#loginForm').submit(function(){
        //定义变量flag,true通过验证，false没通过
        var flag = false;
        if(checkName()&checkPsw()&checkType()){
            flag = true;
        }
        return flag;
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
$(function(){
    $('#navLie li').hover(function () {
            $(this).addClass('daoHang');
        },function () {
            $(this).removeClass('daoHang');
        }
    )
})