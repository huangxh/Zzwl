$(document).ready(function(){
	var winHeight=window.innerHeight;	//获取浏览器内高度
	$("#mainLeft").height(winHeight-80);//设置左边导航条高度
	var mainRight=$("#mainLeft").height();//获取右边DIV高度
	$("#iframe").height(mainRight-42);//设置iframe初始高度

});
window.onload=function(){
	$(".flip").each(function(index){   //列表菜单下拉特效
		$(this).click(function(){
			if($(this).hasClass("active")){
				$(this).removeClass("active");
				$(this).parents("li").removeClass("open");
				$(this).next().slideToggle(500,function(){
					$(this).parents("li").removeClass("active");
				});
				return false;
			}else{
				$(".flip").removeClass("active");
				$(this).addClass('active');
				$(".flip").parents("li").removeClass("active");
				$(this).parents("li").addClass("active");
				$(this).parents("li").addClass("open");
				$(".submenu:visible").slideToggle('normal');
				$(this).next().slideToggle();
				return false;
			}	 
		})
	});

	var urlBtn = $(".url");
	urlBtn.click(function(){
		var iframeSrc=$("#iframe").attr("src");	//获取iframe的路径
		var aHref=$(this).attr("href");
		if($(this).parents("li").hasClass("active")){
			$(".url").parents("li").removeClass("active");
			$(this).parents("li").addClass("active");
		}else{
			$(this).parents("li").removeClass("active");
			$(this).parents("li").addClass("active");
		}
		$("#iframe").find("src",aHref);
	});

	var topMenu=$("#topmenu>li");
	topMenu.click(function(){
		topMenu.removeClass("active");
		$(this).addClass("active");
	});
}