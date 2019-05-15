/* Your code starts here */

var app = app || {};

app.main = (function() {
	console.log('Your code starts here!');




	function hoverPanelsMain() {

		$("#small-panels").mouseenter(function() {
			$(".journal-mainpanel").animate({height: '20vw'}, 700);
			$(".journal-mainpanel").html("<marquee behavior='scroll' direction='left' scrollamount='9'>Typography Journal</marquee>");
			$(".typesetting-mainpanel").animate({left: '80vw', height: '20vw'}, 700);
			$(".typesetting-mainpanel").html("<marquee behavior='scroll' direction='left' scrollamount='7'>Typesetting an Article</marquee>");
			$(".news-mainpanel").animate({left: '60vw', height: '20vw'}, 700);
			$(".news-mainpanel").html("<marquee behavior='scroll' direction='left' scrollamount='10'>Designing for the News</marquee>");
			$(".humorous-mainpanel").animate({left: '40vw', height: '20vw'}, 700);
			$(".humorous-mainpanel").html("<marquee behavior='scroll' direction='left' scrollamount='5'>A Humorous Collection</marquee>");
		})

		$("#small-panels").mouseleave(function() {
			$(".humorous-mainpanel, .news-mainpanel, .typesetting-mainpanel, .journal-mainpanel").empty();
			$(".journal-mainpanel").animate({height: '2vw'}, 700);
			$(".typesetting-mainpanel").animate({left: '98vw', height: '2vw'}, 700);
			$(".news-mainpanel").animate({left: '96vw', height: '2vw'}, 700);
			$(".humorous-mainpanel").animate({left: '94vw', height: '2vw'}, 700);
		})
	}










	var init = function(){
		console.log('Initializing app.');

		hoverPanelsMain();

	};

	return {
		init: init
	};

})();

window.addEventListener('DOMContentLoaded', app.main.init);