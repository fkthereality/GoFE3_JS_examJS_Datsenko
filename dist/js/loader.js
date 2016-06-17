$(document).ready(function () {

// it generate random word from array top-100 popular words
function generateWord() {
	return random["top"][Math.round(Math.random()*99)];
}

function run () {
	word = generateWord();
	searchPixabay(word);
}

run();


//resive array photo from pixabay.com
function searchPixabay (txt) {
	var urlPixabay = "https://pixabay.com/api/";
	var	keyPixabay = "2560282-275c6f94e9ab1238f0e95e5eb";
	var typePixabay = "&image_type=photo&callback=?";
	var arrImg = "";
	var arrWord = "";
	this.txt = txt;
	this.run = $.getJSON(urlPixabay + '?key=' + keyPixabay +
		'&response_group=image_details'+ '&q=' + txt + typePixabay,
		function (data) {
			var k = 0;
			var str = data;
			var lng = str['hits'].length;

			arrImg = new Array(lng);
			arrWord = new Array(lng);
			// delete image with width
			var delSmall_Img = new Array(lng);


			for (var i = 0; i < lng; i++) {
				// delete img min size
				if( str['hits'][i]['webformatWidth'] < 640 || str['hits'][i]['webformatHeight'] < 310) {
					delSmall_Img[k] = i;
					++k;
				}
				arrImg[i] = str['hits'][i]['webformatURL'];
				arrWord[i] = str['hits'][i]['tags'];

			}

			for ( var m = 0; m <= k; m++ ) {
				var tmp = delSmall_Img[m];
				arrImg.splice(tmp, 1);
				arrWord.splice(tmp, 1);
			}

			fillHTML (arrImg, arrWord, txt);
		});
}


//inset photo to HTML
function fillHTML (arrImg, arrWord, txt) {
	$('.gallery__headline').remove();
	$('.grid').remove();
	$('.gallery__headline').remove();
	this.str = txt;
	this.arrImg = arrImg;
	this.arrWord = arrWord;
	var lng = arrImg.length;

	if(lng < 1){
		var noFound = '<div class="grid"><h4">Your search ' +
		' did not match any photos.</h4>' + '</div>';
		$('.gallery').append(noFound);
		return;
	}

	arrHTML = ' <h3 class="gallery__headline" >Discover holiday activity ideas</h3>'
		+'<div class="grid" data-masonry=\'{ "itemSelector": ".grid-item",  "columnWidth": 50}\'>';
	var prefix = '<div class="grid-item">';
	 var prefix2 = '<div class="grid-item grid-item--width2">';
	var root = '<img class="grid-img" src="';

     for (var i = 0; i < 7; i++) {   // 7 photo on the screen
     	tmpStr = "";
     	author = arrWord[i];
     	urlPhoto = arrImg[i];;

     		tmpStr = prefix + '<span class="topic-of-photo">'+ author + '</span>' + root  + urlPhoto +
     		'" alt="\""></div>';

     	arrHTML += tmpStr;
     }

     var elem = document.getElementById('gallery-id');
     elem.insertAdjacentHTML("afterBegin", arrHTML);
 }


$('#search_img').on('dblclick', function (event) {
	event.preventDefault();
	var word = $(this).val();
	searchPixabay(word);
});


$('#search_img').keydown(function (event) {

	if (event.keyCode == 13) {
		var word = $(this).val();
		searchPixabay(word);
        event.preventDefault();
	}
});

$( '#search_submit').click(function( event ) {
    var word = $('#search_img').val();
	searchPixabay(word);
    event.preventDefault();
});


});
