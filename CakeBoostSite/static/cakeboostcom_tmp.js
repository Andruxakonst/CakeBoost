/*
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
		  if(request.readyState === 4) {
			if(request.status === 200) { 
			  console.log(request.responseText)
			  //bio.innerHTML = request.responseText;
			} else {
			  alert(000);
			} 
		  }
}
request.open('Get', 'https://api.cakeboost.com/api/v1/api.php/records/sku/?filter=on_main,eq,1');
*/


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
			window.start= window.start- 1;
			tt=display_c(window.start);
}

startTimerOotd();
function startTimerOotd() {
	var ootd2 = document.getElementById("sku_deadline2");
	if (ootd2) {
		var sku_deadline = document.getElementById("sku_deadline");
		var timeArr = ootd2.innerHTML.split(' ');
		var hs = parseInt(timeArr[0]);
		var ms = parseInt(timeArr[1]);
		var ss = parseInt(timeArr[2]);
		var timetogo = (hs * 60 * 60) + (ms * 60) + ss;
		display_c0(timetogo);
	}
	/*
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
		console.log(timetogo);
		var runningcounter1 = countDownFrom( timetogo );
		setTimeout(_ => clearTimeout(sid),20005);
	}
	*/
}

/*
var tp = document.querySelector(".nav__tp span");
if (tp) {
	fetch('https://api.cakeboost.com/api/v1/api.php/records/news/?filter=status,eq,1&filter=game_id,eq,0&size=4')
	.then(function() {
		tp.innerHTML = '4,9/5 rating'
	})
}
*/

/*
var mp = document.querySelector(".map");
var mpcode = '<iframe src="https://snazzymaps.com/embed/273895" width="100%" height="335px" style="border:none;"></iframe>';
if (mp) mp.innerHTML = mpcode;
*/

var inv = document.querySelector("#investors");
if (inv) {
	/*
		if (windowsize > 959) {
			var e = document.createElement('div');
			e.innerHTML = '<div id="flpr"><span>Interested in partnership?</span><a onclick="goForm();">Leave a proposal</a><b onclick="closePop();"><?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="close"><path id="x" d="M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z"/></g></svg></b></div>';
			let ap = document.getElementById("investors");
			while(e.firstChild) {
				ap.appendChild(e.firstChild);
			}
		}
	/*
	var news = [];
	fetch('https://api.cakeboost.com/api/v1/api.php/records/news/?filter=status,eq,1&filter=game_id,eq,0&size=4')
	.then((resp3) => resp3.json())
	.then(function(data3) {
		news =  data3.records;
		console.log(news);
		var windowsize = $(window).width();
		if (windowsize > 959) {
			var e = document.createElement('div');
			e.innerHTML = '<div id="flpr"><span>Interested in partnership?</span><a onclick="goForm();">Leave a proposal</a><b onclick="closePop();"><?xml version="1.0" encoding="utf-8"?><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="close"><path id="x" d="M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z"/></g></svg></b></div>';
			let ap = document.getElementById("investors");
			while(e.firstChild) {
				ap.appendChild(e.firstChild);
			}
		}
		var fcs1 = document.querySelector('#registery input[placeholder="Your name"]');
		fcs1.required = true;
		var fcs2 = document.querySelector('#registery input[placeholder="example@gmail.com"]');
		fcs2.required = true;
		document.getElementById('radio1').checked = true;
		var nws = document.querySelector(".news");
		var txtn = '';
		news.forEach(function(item, i, skus) {
			console.log(item);
			var tim = new Date(item.date).toISOString(); 
			txtn = txtn +  '<div onclick="document.location = \'/page/blogs/about-us/' + item.slug + '&' + item.id + '\'" class="news__item"><div class="news__img" style="background-image: url(\'https://api.cakeboost.com/upload/news/' + item.img + '\')"></div> <div class="news__info"><p>' + item.title + '</p> <div class="news__bottom"><a href="/page/blogs/about-us/' + item.slug + '&' + item.id + '">Read the full topic</a> <span>' + tim + '</span></div></div></div>';
		});
		if (nws) console.log(nws.innerHTML); nws.innerHTML = txtn;
	});
	*/
}

function goForm() {
	event.preventDefault();
	closePop();
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


document.addEventListener('submit', function (event) {
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
});
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
	if (event.target.matches('.top_services_filter div')) {
		startTimerOotd();
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
	
	
	/*
	if (event.target.matches('.link__right button')) {
		event.preventDefault();
		var t11 = event.target;
		var t1 = t11.parentElement.parentElement.querySelector(".link__left .link__names p").innerHTML;
		copyToClipboard(t1);
	}
	*/
	
	
	if (event.target.matches('.link__right a')) {
		//event.preventDefault();
		var t11 = event.target;
		var t0 = t11.parentElement.querySelector("button");
		t0.innerHTML = 'Copied';
		
	}
	
	/*
	if (event.target.matches('.who_are_you_preson a')) {
		event.preventDefault();
		var t11 = event.target;
		var t1 = t11.innerHTML.trim();
		if (t1 == 'Find a service') { simulateClick( document.querySelector('.games_show_all') ); }
		if (t1 == 'Work with us') { document.location = '/page/work-with-us'; }
	}
	
	if (event.target.matches('.header_login')) {
		event.preventDefault();
		document.location = '/page/login';
	}
	if (event.target.matches('.header_signup')) {
		event.preventDefault();
		document.location = '/page/signin';
	}
	if (event.target.matches('.banner_play_button > div')) {
		simulateClick( document.querySelector('.swiper-slide-active .banner_play_button') );
	}
	if (event.target.matches('.about_main_items_b_footer')) {
		event.preventDefault();
		document.location = '/page/our-advantages';
	}
	if (event.target.matches('.top_services_header')) {
		event.preventDefault();
		document.location = '/wow-shadowlans/catalog';
	}
	*/
	
	return true;
}, false);


function clearMenu() {
	/*
	var els = document.querySelectorAll('.top_services_filter div');
	els.forEach(function(el, index, array){
		if (el.classList.contains("active")) {
			el.classList.remove("active");
		}
	});
	/**/
}

function runSku(gm, bigurl, skus, data111) {
		var offerid = 0;
		var global = 0;
		var txt1 = '';
		data111.forEach(function(item, i, data111) {
			if ( item.game == gm) {
				console.log (item);
				var itemurl = '/' + bigurl + '/service/' + item.slug + '&amp;' + item.id;
				offerid = item.id;
				var itemimg = item.image;
				var itemtitle = item.title;
				var rtng = parseFloat( item.gl_rating );
				if (rtng < 1) rtng = 5;
				var stars = '<span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span>';
				
				if (rtng > 0) stars = '<span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span>';
				if (rtng > 1) stars = '<span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span>';
				if (rtng > 2) stars = '<span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span>';
				if (rtng > 3) stars = '<span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span>';
				if (rtng > 4) stars = '<span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span>';
				var itemprice1 = item.fr_price_usd;
				var itemprice2 = '';
				txt1 = '<div class="top_services_item offer_of_day sku'+ offerid +'"><div class="offers_of_day_date">Offer of the day <span> •</span> 13:45:11</div><a href="'+ itemurl +'" class="top_services_item_img"><img alt="" class="lazyLoad isLoaded" src="https://api.cakeboost.com/upload/sku/' + itemimg + '"><div class="top_services_item_img_mask"><img alt="" class="lazyLoad isLoaded" src="/landing_page/Arrow-up.svg"> <div>View details</div></div></a><a href="'+ itemurl +'" class="top_services_item_title">'+ itemtitle +'</a><div class="top_services_item_price"><span> $ '+ itemprice1 +' </span> '+ itemprice2 +' <div class="top_services_item_stars stars' + rtng + '">' +stars +  '</div></div><a href="'+ itemurl +'" class="top_services_item_href"> View detailes </a></div>';
			}
		});
		
		if (txt1 != '') global = 1;
		
		var txt2 = '';
		var lgth = 0;
		skus.forEach(function(item, i, skus) {
			if ( item.id != offerid) {
				if ( item.game == gm) {
					lgth = lgth + 1;
					if ((lgth + global) < 8) {
						console.log (item);
						var itemurl = '/' + bigurl + '/service/' + item.slug + '&amp;' + item.id;
						var itemimg = item.image;
						var itemtitle = item.title;
						var rtng = parseFloat( item.gl_rating );
						if (rtng < 1) rtng = 5;
						var stars = '<span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span>';
						if (rtng > 0) stars = '<span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span>';
						if (rtng > 1) stars = '<span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span>';
						if (rtng > 2) stars = '<span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span>';
						if (rtng > 3) stars = '<span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Disabled_w.svg"></span>';
						if (rtng > 4) stars = '<span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span><span><!----> <img alt="" class="lazyLoad isLoaded" src="/landing_page/Active.svg"></span>';
						var itemprice1 = item.fr_price_usd;
						var itemprice2 = '';
						txt2 = txt2 +  '<div class="top_services_item sku' + item.id + '"><a href="'+ itemurl +'" class="top_services_item_img"><img alt="" class="lazyLoad isLoaded" src="https://api.cakeboost.com/upload/sku/' + itemimg + '"><div class="top_services_item_img_mask"><img alt="" class="lazyLoad isLoaded" src="/landing_page/Arrow-up.svg"> <div>View details</div></div></a><a href="'+ itemurl +'" class="top_services_item_title">'+ itemtitle +'</a><div class="top_services_item_price"><span> $ '+ itemprice1 +' </span> '+ itemprice2 +' <div class="top_services_item_stars stars' + rtng + '">' +stars +  '</div></div><a href="'+ itemurl +'" class="top_services_item_href"> View detailes </a></div>';
					}
				}
			}
		});
			
	var alls = '' + txt1 + txt2;
	var myNode = document.querySelector(".top_services_items");
	
	console.log(alls);
	
	var mrg = '';
	if (lgth == 3) mrg = 'margin-left:0px;';
	if (lgth == 0 && txt1 == '') mrg = 'margin-left:0px;';
	
	myNode.innerHTML = alls + '<a style="' + mrg + '" href="' + bigurl + '/catalog" class="top_services_item_all"><div><img alt="" class="lazyLoad isLoaded" src="/landing_page/Angle-double-right.svg"> <div>Show all offers...</div></div></a>';
	
}

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