/*WebFontConfig = {
			google: { families: [
				'Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap'
			] }
};

(function() {
			var wf = document.createElement('script');
			wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26//webfont.js';
			wf.type = 'text/javascript';
			wf.async = 'true';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(wf, s);
})();
/**/

let freezeClic = false;
document.addEventListener("click", e => {
    if (freezeClic) {
        e.stopPropagation();
        e.preventDefault();
    }
}, true);

$(document).ready(function() {
  if ($(window).width() > "1311") {
    var y = $(this).scrollTop();
    if (y > 200) {
      $(".chooseGame").slideUp(100);
    } else {
      $(".chooseGame").slideDown(100);
    }
    $(window).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 200) {
        $(".chooseGame").slideUp(250);
      } else {
        $(".chooseGame").slideDown(250);
      }
      if (y > 0) {
        $(".banner_header").addClass("banner_header_moved");
        $(".banner_header").removeClass("banner_header_stable");
      } else {
        $(".banner_header").addClass("banner_header_stable");
        $(".banner_header").removeClass("banner_header_moved");
      }
    });
  }
  $(window).on("scroll resize", function() {
    var o = $(window).scrollTop() / ($(document).height() - $(window).height());
    let temp = $(".progress-bar").css({
      width: ((100 * o) | 0) + "%"
    });
    if (temp.length > 0) {
      $("progress")[0].value = o;
    }
  });
  $(".FAQitem").click(function() {
	  console.log(this)
    if ($(this).css("overflow") === "hidden") {
      $(this).css("height", "100%");
      $(this).css("overflow", "unset");
      $(this).addClass("reverse_trinagle");
    } else {
      $(this).css("height", "16px");
      $(this).css("overflow", "hidden");
      $(this).removeClass("reverse_trinagle");
    }
  });
  // $(document).on('click', '.Protectitem', function(){
  // // $(".Protectitem").click(function() {
  //   if ($(this).css("overflow") === "hidden") {
  //     $(this).css("height", "fit-content");
  //     $(this).css("overflow", "unset");
  //     $(this).addClass("OpenProtectitem");
  //   } else {
  //     $(this).css("height", "90px");
  //     $(this).css("overflow", "hidden");
  //     $(this).removeClass("OpenProtectitem");
  //   }
  // });
  // $(document).on('click', '.MainFAQitem', function(){
  //   if ($(this).css("overflow") === "hidden") {
  //     $(this).css("height", "fit-content");
  //     $(this).css("overflow", "unset");
  //     $(this).addClass("OpenFAQitem");
  //   } else {
  //     $(this).css("height", "auto");
  //     $(this).css("overflow", "hidden");
  //     $(this).removeClass("OpenFAQitem");
  //   }
  // });
  $(window).on("scroll resize", function() {
    if (window.pageYOffset > 500) {
      $(".scroll_up").css("display", "flex");
    } else {
      $(".scroll_up").css("display", "none");
	}
	if($('.form').offset()){
	if($('.form') && $('.form').offset().top< window.pageYOffset+400)
	{
		$("#flpr").css("display", "none");
	}
	else{
		$("#flpr").css("display", "block");
	}}
  });

  function copyText(link) {
    var copyText = link;
    copyText.select();
    document.execCommand("copy");
  }
  window.onscroll = function() {
    var html = document.documentElement,
      body = document.body;
    if (document.getElementById("topnav")) {
      var header = document.getElementById("topnav").style;
      if (html.scrollTop > 49 || body.scrollTop > 49) {
        header.backgroundColor = "#fff";
        header.boxShadow = "0px 4px 12px rgba(68, 75, 77, 0.1)";
      } else {
        header.backgroundColor = "#f5f5f6";
        header.boxShadow = "";
      }
    }
  };
  if(typeof $.fancybox == 'function') {
    $('[data-fancybox="images"]').fancybox({
      afterLoad: function(instance, current) {
        var pixelRatio = window.devicePixelRatio || 1;

        if (pixelRatio > 1.5) {
          current.width = current.width / pixelRatio;
          current.height = current.height / pixelRatio;
        }
      }
    });
  }
});


/* EX- CAKEBOOST_TMP.JS */

document.body.onclick = function (e) {
  if (e && (e.which == 2 || e.button == 4 )) {
    console.log('middleclicked')
  }
}

function copyText(txt) {
	console.log(this);
    var dummy = document.createElement("textarea");
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    dummy.value = txt;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}


$(document).ready(function() {
	runOfferTime();
  runEventTime();
});
$(document).on('click','.top_services_filter div', function() {
	setTimeout( runOfferTime(), 500);
});

function runOfferTime() {
	var ootd = document.getElementById("sku_deadline2");
	if (ootd) {
		var sku_deadline = document.getElementById("sku_deadline");
		var timeArr = ootd.innerHTML.split(':');
		var hs = parseInt(timeArr[0]);
		var ms = parseInt(timeArr[1]);
		var ss = parseInt(timeArr[2]);
		var insertZero = n => n < 10 ? "0"+n : ""+n,
		displayTime = n => n ? sku_deadline.textContent = insertZero(~~(n/3600)%3600) + ":" +
													 insertZero(~~(n/60)%60) + ":" +
													 insertZero(n%60)
								: sku_deadline.textContent = "",
		countDownFrom = n => (displayTime(n), setTimeout(_ => n ? sid = countDownFrom(--n)
																 : displayTime(n), 1000)),
				   sid;
		var timetogo = (hs * 60 * 60) + (ms * 60) + (ss);
		if (timetogo < 1000) timetogo = 1000;
    if (isNaN(timetogo)) timetogo = 1488;
		var runningcounter1 = countDownFrom( timetogo );
		setTimeout(_ => clearTimeout(sid),timetogo*1000);
	}
}
function runEventTime() {
	var ootd = document.getElementById("event_deadline2");
	if (ootd) {
		var event_deadline = document.getElementById("event_deadline");
		var timeArr = ootd.innerHTML.split(':');
		var hs = parseInt(timeArr[0]);
		var ms = parseInt(timeArr[1]);
		var ss = parseInt(timeArr[2]);
		var insertZero = n => n < 10 ? "0"+n : ""+n,
		displayTime = n => n ? event_deadline.textContent = insertZero(~~(n/3600)%3600) + ":" +
													 insertZero(~~(n/60)%60) + ":" +
													 insertZero(n%60)
								: event_deadline.textContent = "",
		countDownFrom = n => (displayTime(n), setTimeout(_ => n ? sid = countDownFrom(--n)
																 : displayTime(n), 1000)),
				   sid;
		var timetogo = (hs * 60 * 60) + (ms * 60) + (ss);
		if (timetogo < 1000) timetogo = 1000;
    if (isNaN(timetogo)) timetogo = 1488;
		var runningcounter1 = countDownFrom( timetogo );
		setTimeout(_ => clearTimeout(sid),timetogo*1000);
	}
}

startSpecialOffer();
function startSpecialOffer() {
	var ootd1 = document.querySelector(".specialOffers .time");
	if (ootd1) {
		var sku_deadline = document.querySelector(".specialOffers .time");
		var timeArr = ootd1.innerHTML.split(' ');
		var ds = parseInt(timeArr[0]);
		var hs = parseInt(timeArr[1]);
		var ms = parseInt(timeArr[2]);
		var ss = parseInt(timeArr[2]);
		var timetogo = (ds * 24 * 60 * 60) + (hs * 60 * 60) + (ms * 60);
		display_c(timetogo);
	}
}


//setTimeout(startDiscount(), 500);
function startDiscount() {
	var ood = document.querySelector(".categoryItemsContainer .bestTime");

	if (ood) {
		//var timestamps = document.getElementsByClassName("bestTime");
		/*
		timestamps.forEach(function(timestamp) {
			  console.log(timestamps[i].innerHTML);
			  //timestamps[i].innerHTML = localTime;
			});
		*/
			/*
		sku_deadline.forEach(
		  function(currentValue, currentIndex, listObj) {
			var timeArr = sku_dedline[currentIndex].innerHTML.split(' ');
			var ds = parseInt(timeArr[0]);
			console.log(currentIndex);
			console.log(ds);
			var hs = parseInt(timeArr[1]);
			var ms = parseInt(timeArr[2]);
			var ss = parseInt(timeArr[2]);
			var timetogo = (ds * 24 * 60 * 60) + (hs * 60 * 60) + (ms * 60);
			display_c2(timetogo);
		  },
		  'myThisArg'
		);
			*/
	}
}

function display_c(start){
			var end = 0;
			var refresh=1000;
			window.start = parseFloat(start);
			if(window.start >= end ){
				mytime=setTimeout('display_ct()',refresh)
			} else {

			}
}

function display_ct() {
			var days=Math.floor(window.start / 86400);
			var hours = Math.floor((window.start - (days * 86400 ))/3600);
			var minutes = Math.floor((window.start - (days * 86400 ) - (hours *3600 ))/60);
			var secs = Math.floor((window.start - (days * 86400 ) - (hours *3600 ) - (minutes*60)));
			var x = days + "d " + hours + "h "  + minutes + "m "  + secs + "s";
			document.querySelector(".specialOffers .time").innerHTML = x;
			window.start= window.start- 1;
			tt=display_c(window.start);
}


function display_c0(start){
			var end = 0;
			var refresh=1000;
			window.start = parseFloat(start);
			if(window.start >= end ){
				mytime=setTimeout('display_ct0()',refresh)
			} else {

			}
}

function display_ct0() {
			var days=Math.floor(window.start / 86400);
			var hours = Math.floor((window.start - (days * 86400 ))/3600);
			var minutes = Math.floor((window.start - (days * 86400 ) - (hours *3600 ))/60);
			var secs = Math.floor((window.start - (days * 86400 ) - (hours *3600 ) - (minutes*60)));
			var x = hours + ":"  + minutes + ":"  + secs;
			document.getElementById("sku_deadline").innerHTML = x;
			document.getElementById("event_deadline").innerHTML = x;
			window.start= window.start- 1;
			tt=display_c(window.start);
}


function goForm() {
	event.preventDefault();
	goto1 = document.querySelector("#register");
	goto1.scrollIntoView({block: "center", behavior: "smooth"});
	var fcs = document.querySelector('#registery input[placeholder="Your name"]');
	fcs.focus();
}
function closePop() {
	event.preventDefault();
	var cls = document.getElementById("flpr");
	cls.classList.add("none");
}

//addScript('https://maps.googleapis.com/maps/api/js?callback=initMap&amp;key=AIzaSyAfXYnob2nOdeN9kOGzs2I3lR3-Hff5SXM');
function initMap() {
	var myLatlng1 = new google.maps.LatLng(51.518365, -0.127757);
	map1 = new google.maps.Map(document.querySelector('.map'), {
		center: myLatlng1,
		zoom: 15
	});
	var marker1 = new google.maps.Marker({
		position: myLatlng1,
		map: map1
	});
    resizeMap(map1);
}


/*document.addEventListener('submit', function (event) {
	if (event.target.matches('#registery')) {
		event.preventDefault();
		var ell = document.querySelector(".checkbox-label");
		var chck = document.getElementById("checkbox1");
		if ( chck.checked == false ) {
			ell.classList.add("redd");
			return false;
		} else ell.classList.remove("redd");
		var iname = document.getElementById('invname').value;
		var imail = document.getElementById('invmail').value;
		var itext = document.getElementById('invtext').value;
		var irole = document.getElementById('invrole');
		var xhr = new XMLHttpRequest();
		xhr.open("POST", 'https://api.cakeboost.com/requests.php', true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify({
			"method": "user_partn",
			"name": iname,
			"email": imail,
			"comment": itext,
			"role": "1"
		}));
		document.getElementById('invname').value = '';
		document.getElementById('invmail').value = '';
		document.getElementById('invtext').value = '';
	}
});*/
document.addEventListener('click', function (event) {

	if (event.target.matches('#aboutUs .btn__link')) {
		event.preventDefault();
		document.location = '/wow-shadowlands/catalog';
	}

	if (event.target.matches('#investors a.btn__link') || event.target.matches('#investors a.btn__link span')) {
		event.preventDefault();
		var fcs = document.querySelector('#registery input[placeholder="Your name"]');
		fcs.focus();
	}
	if (event.target.matches('#investors .news__btn') || event.target.matches('#investors .news__btn span')) {
		event.preventDefault();
		document.location = '/page/blogs/about-us';
	}


	if (event.target.matches('#investors .topnav__links a')) {
		event.preventDefault();
		var ihrf = event.target.innerHTML;
		if (ihrf == 'Home') var goto1 = document.querySelector(".investors__1");
		if (ihrf == 'About us') var goto1 = document.querySelector(".investors__2");
		if (ihrf == 'Facts') var goto1 = document.querySelector(".investors__3");
		if (ihrf == 'Video') var goto1 = document.querySelector(".investors__8");
		if (ihrf == 'Our journey') var goto1 = document.querySelector(".investors__4");
		if (ihrf == 'Map of clients') var goto1 = document.querySelector(".investors__5");
		if (ihrf == 'News') var goto1 = document.querySelector(".investors__6");
		if (ihrf == 'Register') var goto1 = document.querySelector("#register");

		goto1.scrollIntoView({block: "center", behavior: "smooth"});
	}


	if (event.target.matches('.link__right a')) {
		//event.preventDefault();
		var t11 = event.target;
		var t0 = t11.parentElement.querySelector("button");
		t0.innerHTML = 'Copied';

	}



	return true;
}, false);


function stripHtml(html)
{
   let tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

var simulateClick = function (elem) {
	var evt = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window
	});
	var canceled = !elem.dispatchEvent(evt);
};

function addScript( src ) {
  var s = document.createElement( 'script' );
  s.setAttribute( 'src', src );
  document.body.appendChild( s );
}

function filterByProperty(array, prop, value){
    var filtered = [];
    for(var i = 0; i < array.length; i++){

        var obj = array[i];

        for(var key in obj){
            if(typeof(obj[key] == "object")){
                var item = obj[key];
                if(item[prop] == value){
                    filtered.push(item);
                }
            }
        }

    }

    return filtered;

}
/**/
