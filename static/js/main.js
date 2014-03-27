$(document).ready(function() {
	console.log("Hello!");



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
  $('ul#loadimg').append('<li><a class="th" href="/static/img/' + filt_engag_photos[i] + '.jpg"><img src="/static/img/' + filt_engag_photos[i] + '.jpg"></a></li>');

}


// fadein Load


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
