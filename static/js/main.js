$(document).ready(function() {
	console.log("Hello!");

var image_tag = ''

var i = 0;

for(i=11; i < 44; i++) {
  $('ul#loadimg').append('<li><a class="th" href="/static/img/' + [i] + '.jpg"><img src="/static/img/' + [i] + '.jpg"></a></li>');
};

});
