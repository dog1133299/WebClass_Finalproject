$(window).load(function() {
	if ($(window).width() > 480) {
		// [For 電影列表, 哈燒影榜]
		if($("ul.movieList").size() > 0) { //有這個Dom元素才須往下執行
			coverAutoHeight( 1.5, $("ul.movieList"));
		}
		if($("ul.hotList").size() > 0) {coverAutoHeight( 1.5, $("ul.hotList"));}

		// [For 活動列表, 商場活動列表]
		if($("ul.eventList").size() > 0) {coverAutoHeight( 1.328, $("ul.eventList"));}
		if($("ul.mallEventList").size() > 0) {coverAutoHeight( 1.328, $("ul.mallEventList"));}

		// [For 商家介紹列表]
		if($("ul.mallList").size() > 0) {coverAutoHeight( 0.558, $("ul.mallList"));}

		//  [For 點數兌換商品列表, 影城餐飲列表, 商品列表]
		if($("#f1").size() > 0) {coverAutoHeight( 0.928, $("#f1"));}
		if($(".article ul.productList").size() > 0) {coverAutoHeight( 0.928, $(".article ul.productList"));}
		if($(".articleBrand ul.productList").size() > 0) {coverAutoHeight( 0.928, $(".articleBrand ul.productList"));}
	}


	//清單列表縮圖自動調整
	function coverAutoHeight( iScale, ulName){  //縮圖比例, Dom清單物件
		var trueWidth = ulName.find("li:eq(0) figure img").width();  //算出不同解析下的圖片寬度
		var trueHight = ulName.find("li:eq(0) figure img").width()*iScale; //寬度乘上正確比例就會是正確高度
		$.each(ulName.find("li figure"), function(){ //限制圖片顯示高度
			$(this).css({
				"height": trueHight
			});
		});
		$.each(ulName.find("li figure a"), function(){ //限制圖片顯示高度
			$(this).css({
				"height": trueHight
			});
		});
		$.each(ulName.find("li figure a img"), function(){ //如果圖片高度小於正確高度，要改不同對齊方式
			if($(this).height()<trueHight){
				$(this).css({
					"height": "100%",
					"width":"auto"
				});
				$(this).css(
					"margin-left", function() { return -($(this).width()-trueWidth)/2;} //讓放大後的圖片也能置中對齊
				);
			}
		});
	}
});
$(function () {

	if ($(window).width() > 620) {
		// Side Search Area Open
		$(".linkWord").click(function(event) {
		  //一開始全關閉
		  $(".linkWord").stop().animate({
		    "right": 0}, 400, function() {$(this).closest('li').removeClass('open');
		  });
		  $('.searchSet').stop().animate({ "right": "-400px"}, 400);
		  if($(this).closest('li').hasClass('open')){
		    //點到時展開，若已展開就收合
		    $(this).stop().animate({
		      "right": 0}, 400, function() {$(this).closest('li').removeClass('open');
		    });
		    $(this).closest('li').find('.searchSet').stop().animate({
		      "right": "-400px"}, 400, function() {
		    });
		  }else{
		    $(this).stop().animate({
		      "right": "400px"}, 400, function() {
		      	$(this).closest('li').addClass('open');
		    });
		      $(this).closest('li').find('.searchSet').stop().animate({
		        "right": 0}, 400);
		  }
		  return false;
		});
	}else{
		// Side Search Area Open - For Phone
		$(".linkWord").click(function(event) {
		  //一開始全關閉
		  $(".linkWord").stop().animate({
		    "right": 0}, 400, function() {$(this).closest('li').removeClass('open');
		  });
		  $('.searchSet').stop().animate({ "right": "-250px"}, 400);
		  if($(this).closest('li').hasClass('open')){
		    //點到時展開，若已展開就收合
		    $(this).stop().animate({
		      "right": 0}, 400, function() {$(this).closest('li').removeClass('open');
		    });
		    $(this).closest('li').find('.searchSet').stop().animate({
		      "right": "-250px"}, 400, function() {
		    });
		  }else{
		    $(this).stop().animate({
		      "right": "250px"}, 400, function() {
		      	$(this).closest('li').addClass('open');
		    });
		      $(this).closest('li').find('.searchSet').stop().animate({
		        "right": 0}, 400);
		  }
		  return false;
		});
	}

	//QA List Open
	$(".insideQalist li").click(function() {
	    if($(this).hasClass('open')){
	        $(this).animate({
	            "right": "0"},300, function(){
	                $(".insideQalist li").removeClass('open');
	        });
	    }else{
	        $(".insideQalist li").removeClass('open');
	        $(".insideQalist li").animate({
	            "right": "0"},300, function(){
	        });
	        $(this).stop().animate({
	            "right": "75px"}, 300, function() {
	            var aLink = $(this).find('a').attr('href');
	            $(this).addClass('open');
	            $(".open a.blank").click(function(event) { //恢復li內a的click連結
	                window.open(aLink,'_blank');
	            });
	        });
	    }
	    return false; //阻擋li的click
	});
});