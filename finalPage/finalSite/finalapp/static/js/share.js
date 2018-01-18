$(window).load(function() {
  //baseWidth 新增一個隱藏div紀錄初始頁面寬度。
  $( "body" ).append( "<div class='hidden baseWidth'>"+$(window).width()+"</div>" );
  //sbannerArea Height[For Submenu AD]
  var sbannerH = Math.round($(window).width()*0.825*0.34); //0.35=330/940
  var sbannerW = Math.round($(window).width()*0.816);
  if ($(window).width() > 875 & $(window).width() < 1175) {
    $(".haveBanner").find('ul').height(sbannerH);
    $(".sbannerArea").find('img').height(sbannerH);
    $(".sbannerArea").find('a').height(sbannerH);
    $(".bannerGroup").height(sbannerH);
    $(".bannerGroup ul").width($(window).width()-sbannerW);
  }else{
    if ($(window).width() > 1175) {
      sbannerH = 330;
      $(".haveBanner").find('ul').height(sbannerH);
      $(".sbannerArea").find('img').height(sbannerH);
      $(".sbannerArea").find('a').height(sbannerH);
      $(".bannerGroup").height(sbannerH);
      $(".bannerGroup ul").width(199);
    }
  }

  //popup AD box tobe center
  if ($(window).width() < 1300) {
    var popupH = $(window).height();
    var nowPopupSize;
    if($(window).width()<$(window).height()){
      var nowPopupSize = $(window).width()-40;
      $(".popup section").css({
        'margin-top': -(nowPopupSize/2),
        'margin-left': -(nowPopupSize/2),
        'height': nowPopupSize,
        'width': nowPopupSize
      });
    }else{
      var nowPopupSize = $(window).height()-80;
      $(".popup section").css({
        'margin-top': '40px',
        'margin-left': -(nowPopupSize/2),
        'height': nowPopupSize,
        'width': nowPopupSize
      });
    }
  };
});
$(window).resize(function() {
  //sbannerArea Height[For Submenu AD]
  var sbannerH = Math.round($(window).width()*0.825*0.34); //0.35=330/940
  var sbannerW = Math.round($(window).width()*0.816);
  if ($(window).width() > 875 & $(window).width() < 1175) {
    $(".haveBanner").find('ul').height(sbannerH);
    $(".sbannerArea").find('img').height(sbannerH);
    $(".sbannerArea").find('a').height(sbannerH);
    $(".bannerGroup").height(sbannerH);
    $(".bannerGroup ul").width($(window).width()-sbannerW);
  }else{
    if ($(window).width() > 1175) {
      sbannerH = 330;
      $(".haveBanner").find('ul').height(sbannerH);
      $(".sbannerArea").find('img').height(sbannerH);
      $(".sbannerArea").find('a').height(sbannerH);
      $(".bannerGroup").height(sbannerH);
      $(".bannerGroup ul").width(199);
    }
  }
  var baseW = $(".baseWidth").html();
  if(baseW>883){ //如果本來就是大於平板尺寸
    if($(window).width()<883){ //當小於平板尺寸時，才會重整頁面
      //window.location.replace(location.href);
    };
  }else{ //反之如果本來就是平板以下尺寸
    if($(window).width()>883){ //當大於平板尺寸時，才會重整頁面
       //window.location.replace(location.href);
    }
  };
});
$(function () {
  // form check
  // binds form submission and fields to the validation engine

  $.validationEngine.defaults.scroll = false;
  jQuery("form").validationEngine();

  //popup img
  $(".openNote").click(function(event) {
    var poplink = $(this).attr('href');
    $(poplink).click();
  });
   $(".openInfo").click(function(event) {
    var poplink2 = $(this).attr('href');
    $(poplink2).click();
  });


    //Back to Previous Page 回上一頁
    $(".btnBack").click(function() {
        parent.history.back();
        return false;
    });

    //close popup
    $(".popup .icon-delete").click(function(event) {
      $(this).closest('div').stop().fadeOut(400);
      return false;
    });
    //判斷燈箱以外範圍點擊時要關閉
    if($(".popup")){
      $('.popup').click(function(evt) {
          if($(evt.target).parents(".popup").length==0 &&
              evt.target.cass != "popup") {
              $(".popup").stop().fadeOut(400);
          }
      });
    }

    //close note popup
    $(".icon-delete").click(function(event) {
      $(this).closest('div').stop().fadeOut(400);
      return false;
    });

    //open tel box
    $(".openTel").click(function(event) {
      $(".serviceTel").stop().slideDown(400);
    });

    //Submenu Open
    if ($(window).width() > 900) {
      //subMenu SlideDown
      $(".firstMenu").hover(function() {
        //全部收合
        $(".sublink").stop().animate({ "bottom":"0", "top":"-500px"}, 400, function() {
          $(this).closest('li.mainLink').removeClass('slide');
        });
        $(".haveBanner .bannerGroup").stop().animate({ "margin-top":"-50%"}, 400, function() {
          $(this).closest('li.mainLink').removeClass('slide');
        });
        //展開所選
        $(this).closest('li').find('ul.sublink').stop().animate({
          "bottom":"auto", "top":"100px"}, 400, function() {
          $(this).closest('li.mainLink').addClass('slide');
        });
        $(this).closest('li.haveBanner').find('.bannerGroup').stop().animate({
          "margin-top":"0%"}, 400, function() {
          $(this).closest('li.mainLink').addClass('slide');
        });
      }, function() {
        //滑鼠停在.slide下一樣展開
        $(".slide ul.sublink").mouseover(function(event) {
          $(".slide ul.sublink").stop().animate({
            "bottom":"auto", "top":"100px"}, 400, function() {
            $(this).closest('li.mainLink').addClass('slide');
          });
        });
        $(".slide .bannerGroup").mouseover(function(event) {
          $(".slide .bannerGroup").stop().animate({
            "margin-top":"0%"}, 400, function() {
              $(this).closest('li.mainLink').addClass('slide');
            });
          });
        //滑鼠離開時次選單時，全部收合
        $(".slide ul.sublink").mouseleave(function(event) {
          $(".sublink").stop().animate({ "bottom":"0", "top":"-500px"}, 400, function() {
            $('li.mainLink').removeClass('slide');
          });
        });
        $(".slide .bannerGroup").mouseleave(function(event) {
          $(".haveBanner .bannerGroup").stop().animate({ "margin-top":"-50%"}, 400, function() {
            $('.slide').removeClass('slide');
          });
        });
        //原本menu的mouseleave動作
        $(".sublink").stop().animate({ "bottom":"0", "top":"-500px"}, 400, function() {
          $(this).closest('li.mainLink').removeClass('slide');
        });
        $(".haveBanner .bannerGroup").stop().animate({ "margin-top":"-50%"}, 400, function() {
          $('.slide').removeClass('slide');
        });
      });
    }else{

      //For Phone Menu
      $(".icon-menu").click(function(event) {
        if($(".menuAll").hasClass('press')){
          $(".menuAll").stop().slideUp('400', function() {
            $(this).removeClass('press');
          });
        }else{
          $(".menuAll").stop().slideDown('400', function() {
            $(this).addClass('press');
          });
        }
      });
      $('.firstLink .first').click(function(e) {  //讓link無作用
        e.preventDefault();
      });
      $(".firstLink").click(function(event) {
        if($(this).hasClass('open')){
          $(this).find('ul').stop().slideUp('400', function() {
            $(this).closest('li').removeClass('open');
          });
        }else{
          $(this).find('ul').stop().slideDown('400', function() {
            $(this).closest('li').addClass('open');
          });
        }
      });
      $('.firstMenu').click(function(e) {  //讓link無作用
        e.preventDefault();
      });
      $(".mainLink").click(function(event) {
        if($(this).hasClass('open')){
          $(this).find('ul').stop().slideUp('400', function() {
            $(this).closest('li').removeClass('open');
            $(this).closest('li').find('.bannerGroup .sbannerArea').stop().slideUp(400);
          });
        }else{
          $(this).find('ul').stop().slideDown('400', function() {
            $(this).closest('li').addClass('open');
            $(this).closest('li').find('.bannerGroup .sbannerArea').stop().slideDown(400);
          });
        }
      });
    };

    if ($(window).width() > 700) {

      //Footer Sitemap Open
      $(".addressLink .open").click(function(event) {
        if($(this).hasClass('open')){
          $('.open').removeClass('open').addClass('close');
          $(".footerLink").stop().slideDown('400', function() {
            $(".footerOpen").removeClass('footerOpen').addClass('footerClose');
          });
        }else{
          $(this).removeClass('close').addClass('open');
          $(".footerLink").stop().slideUp('400', function() {
            $(".footerClose").removeClass('footerClose').addClass('footerOpen');
          });
        }
        return false;
      });
    }else{
      //Open & Close Footer Sitemap
      $(".footer .open").click(function(event) {
        if($(this).hasClass('open')){
          $(".footerLink").stop().css("z-index", '99').animate({"opacity": 1}, 400);
        }
      });
      //Popup Close
      $(".popupClose").click(function(event) {
        $(".footerLink").stop().animate({"opacity": 0}, 400, function(){
          $(".footerLink").css("z-index", '0');
        });
        return false;
      });
    }

    //Photo Swipe - PopupPic
    var initPhotoSwipeFromDOM = function(gallerySelector) {

        // parse slide data (url, title, size ...) from DOM elements
        // (children of gallerySelector)
        var parseThumbnailElements = function(el) {
            var thumbElements = el.childNodes,
                numNodes = thumbElements.length,
                items = [],
                figureEl,
                linkEl,
                size,
                item;

            for(var i = 0; i < numNodes; i++) {

                figureEl = thumbElements[i]; // <figure> element

                // include only element nodes
                if(figureEl.nodeType !== 1) {
                    continue;
                }

                linkEl = figureEl.children[0]; // <a> element

                size = linkEl.getAttribute('data-size').split('x');

                // create slide object
                item = {
                    src: linkEl.getAttribute('href'),
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };



                if(figureEl.children.length > 1) {
                    // <figcaption> content
                    item.title = figureEl.children[1].innerHTML;
                }

                if(linkEl.children.length > 0) {
                    // <img> thumbnail element, retrieving thumbnail url
                    item.msrc = linkEl.children[0].getAttribute('src');
                }

                item.el = figureEl; // save link to element for getThumbBoundsFn
                items.push(item);
            }

            return items;
        };

        // find nearest parent element
        var closest = function closest(el, fn) {
            return el && ( fn(el) ? el : closest(el.parentNode, fn) );
        };

        // triggers when user clicks on thumbnail
        var onThumbnailsClick = function(e) {
            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;

            var eTarget = e.target || e.srcElement;

            // find root element of slide
            var clickedListItem = closest(eTarget, function(el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });

            if(!clickedListItem) {
                return;
            }

            // find index of clicked item by looping through all child nodes
            // alternatively, you may define index via data- attribute
            var clickedGallery = clickedListItem.parentNode,
                childNodes = clickedListItem.parentNode.childNodes,
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;

            for (var i = 0; i < numChildNodes; i++) {
                if(childNodes[i].nodeType !== 1) {
                    continue;
                }

                if(childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }



            if(index >= 0) {
                // open PhotoSwipe if valid index found
                openPhotoSwipe( index, clickedGallery );
            }
            return false;
        };

        // parse picture index and gallery index from URL (#&pid=1&gid=2)
        var photoswipeParseHash = function() {
            var hash = window.location.hash.substring(1),
            params = {};

            if(hash.length < 5) {
                return params;
            }

            var vars = hash.split('&');
            for (var i = 0; i < vars.length; i++) {
                if(!vars[i]) {
                    continue;
                }
                var pair = vars[i].split('=');
                if(pair.length < 2) {
                    continue;
                }
                params[pair[0]] = pair[1];
            }

            if(params.gid) {
                params.gid = parseInt(params.gid, 10);
            }

            return params;
        };

        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
            var pswpElement = document.querySelectorAll('.pswp')[0],
                gallery,
                options,
                items;

            items = parseThumbnailElements(galleryElement);

            // define options (if needed)
            options = {

                // define gallery index (for URL)
                galleryUID: galleryElement.getAttribute('data-pswp-uid'),

                getThumbBoundsFn: function(index) {
                    // See Options -> getThumbBoundsFn section of documentation for more info
                    var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                        rect = thumbnail.getBoundingClientRect();

                    return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                }

            };

            // PhotoSwipe opened from URL
            if(fromURL) {
                if(options.galleryPIDs) {
                    // parse real index when custom PIDs are used
                    // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                    for(var j = 0; j < items.length; j++) {
                        if(items[j].pid == index) {
                            options.index = j;
                            break;
                        }
                    }
                } else {
                    // in URL indexes start from 1
                    options.index = parseInt(index, 10) - 1;
                }
            } else {
                options.index = parseInt(index, 10);
            }

            // exit if index not found
            if( isNaN(options.index) ) {
                return;
            }

            if(disableAnimation) {
                options.showAnimationDuration = 0;
            }

            // Pass data to PhotoSwipe and initialize it
            gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };

        // loop through all gallery elements and bind events
        var galleryElements = document.querySelectorAll( gallerySelector );

        for(var i = 0, l = galleryElements.length; i < l; i++) {
            galleryElements[i].setAttribute('data-pswp-uid', i+1);
            galleryElements[i].onclick = onThumbnailsClick;
        }

        // Parse URL and open gallery if it contains #&pid=3&gid=1
        var hashData = photoswipeParseHash();
        if(hashData.pid && hashData.gid) {
            openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
        }
    };

    // execute above function
    initPhotoSwipeFromDOM('.publicNote');
    initPhotoSwipeFromDOM('.publicInfo');
    initPhotoSwipeFromDOM('.publicPhoto');

});

//身分證驗證(For validate用)
function checkTWID(field,rules, i, options){
    /// 依照字母的編號排列，存入陣列備用。
  var letters = new Array('A', 'B', 'C', 'D',
      'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
      'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
      'X', 'Y', 'W', 'Z', 'I', 'O');
  // 儲存各個乘數
  var multiply = new Array(1, 9, 8, 7, 6, 5, 4, 3, 2, 1);
  var nums = new Array(2);
  var firstChar;
  var firstNum;
  var lastNum;
  var total = 0;
  // 撰寫「正規表達式」。第一個字為英文字母，
  // 第二個字為1或2，後面跟著8個數字，不分大小寫。
  var regExpID=/^[a-z](1|2)\d{8}$/i;
  // 使用「正規表達式」檢驗格式
  if (field.val().search(regExpID)==-1) {
    // 基本格式錯誤
   return "* 您的身份證號碼格式不正確";
  } else {
  // 取出第一個字元和最後一個數字。
  firstChar = field.val().charAt(0).toUpperCase();
  lastNum = field.val().charAt(9);
  }
  // 找出第一個字母對應的數字，並轉換成兩位數數字。
  for (var i=0; i<26; i++) {
    if (firstChar == letters[i]) {
      firstNum = i + 10;
      nums[0] = Math.floor(firstNum / 10);
      nums[1] = firstNum - (nums[0] * 10);
      break;
    }
  }
  // 執行加總計算
  for(var i=0; i<multiply.length; i++){
    if (i<2) {
      total += nums[i] * multiply[i];
    } else {
      total += parseInt(field.val().charAt(i-1)) *
               multiply[i];
    }
  }
  // 和最後一個數字比對
  if ((10 - (total % 10))!= lastNum) {
  return "* 身份證號碼寫錯了";
  }
  return true;
};
