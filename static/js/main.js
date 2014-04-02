$('#up_arrow').hide();

$(document).ready(function() {

  // arrow nav

  var offset = 200;
  var duration = 500;
  $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
          $('#up_arrow').fadeIn(duration);
      } else {
          $('#up_arrow').fadeOut(duration);
      }
  });
  $('#up_arrow').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);
    return false;
  });

	console.log("Hello!");


  jQuery('.back-to-top').click(function(event) {
      event.preventDefault();
      jQuery('html, body').animate({scrollTop: 0}, duration);
      return false;
  })

var engagement_photos = []
for (i = 11; i <= 44; i++) {
  engagement_photos.push(i);
}

//remove photos kendra doesn't like
function remove_engag_photos(element) {
  // badphotos = [13, 16, 17, 19];
  return element != 13 && element != 16 && element != 17 && element != 19
};

// probably best to just delete photos and then re-number them.
// remove_engag_photos function would then become unnecessary.

var filt_engag_photos = engagement_photos.filter(remove_engag_photos);


for (i = 0; i < filt_engag_photos.length; i++ ) {
  $('ul#photoset1').append('<li><a class="th" href="/static/img/' + filt_engag_photos[i] + '.jpg"><img src="/static/img/' + filt_engag_photos[i] + '.jpg"></a></li>');
}

// load 'years' album
var years_album = []
for (i = 1; i <= 9; i++) {
  years_album.push(i);
}
console.log(years_album)
for (i = 0; i < years_album.length; i++) {
  $('ul#photoset2').append('<li><a class="th" href="/static/img/years/' + years_album[i] + '.jpg"><img src="/static/img/years/' + years_album[i] + '.jpg"></a></li>');
}


// fadein Load images


$('img').hide();
$('img').each(function(i) {
    if (this.complete) {
        $(this).fadeIn("slow");
    } else {
        $(this).load(function() {
            $(this).fadeIn("slow");
        });
    }
});



});
