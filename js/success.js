/**
 * Created by Administrator on 2016/7/1.
 */
function countDown(){
    //找对象
    var sec = document.getElementById('sec');
    //获取内容
    var num = sec.innerHTML;
    //倒计时：自己减一
    num--;
    if(num>=0){
        sec.innerHTML = num;
    }else{
        sec.innerHTML = '0';
    }
}
//计时器走起来
var timer = setInterval('countDown()',1000);
var delay = setTimeout('location.href = "success-index.html"',3000);