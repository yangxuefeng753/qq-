/*客户端下载功能*/
$(".textline2").click(function(){
	alert("该功能尚未开放");
});
$(".titleload2").click(function(){
	alert("该功能尚未开放");
});
$(".tc").click(function(){
	$("#loadjm").hide()
});
$("#xzkhd").click(function(){
	alert("暂无客户端");
});
var num=0;//纯净模式转换变量
/*纯净模式*/
$("#f7").click(function(){
	if(num==0){
		$("b:eq(13)").removeAttr("id");
		$("b:eq(13)").attr("id","f71");
		$(".choose1")[0].style="display:none;disabled:disabled";
		$(".music1")[0].style="display:none;disabled:disabled";
		$("i")[0].style="display:none;disabled:disabled";
		$("i")[1].style="display:none;disabled:disabled";
		$(".list")[0].style="display:none;disabled:disabled";
		$(".choose2")[0].style="display:none;disabled:disabled";
		$("#cjms")[0].style="display:inline-block;";
		num++;
	}else if(num==1){
		$("b:eq(13)").removeAttr("id");
		$("b:eq(13)").attr("id","f7");
		$(".choose1")[0].style="display:inline-block;";
		$(".music1")[0].style="display:inline-block;";
		$("i")[0].style="display:inline-block;";
		$("i")[1].style="display:inline-block;";
		$(".list")[0].style="display:inline-block;";
		$(".choose2")[0].style="display:inline-block;";
		$("#cjms")[0].style="display:none;";
		num--;
	}
});
/*登陆操作*/
$("a:eq(1)").click(function(){
	$("#loadjm")[0].style="display:inline-block;";
});
$("input:eq(3)").click(function(){
	var str=`username=${$("#username").val()}&password=${$("#password").val()}`
	var xhr=new XMLHttpRequest();
	xhr.open("get","http://www.coolneng.com/form/?"+str,true);
	xhr.send(str);
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var a=JSON.parse(xhr.responseText)
			console.log($(".textline3>a:eq(0)"));
			$(".textline3>a:eq(0)").html(`<img src="${a.pic}"> ${a.content.username}`);
			$("#loadjm").hide();
		}
	}
})