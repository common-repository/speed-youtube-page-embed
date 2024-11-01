jQuery(function() {
    
    jQuery('.page_youtube_item').mouseover(function() {
        jQuery(this).children(':first-child').removeClass('play_image');
        jQuery(this).children(':first-child').addClass('play_image_hover');
    });
    
    jQuery('.page_youtube_item').mouseout(function() {
        jQuery(this).children(':first-child').removeClass('play_image_hover');
        jQuery(this).children(':first-child').addClass('play_image');
    });

    jQuery('.page_youtube_item').click(function() {
        var htm = '<iframe width="' + jQuery(this).attr('data-w') + '" height="' + jQuery(this).attr('data-h') + '" src="http://youtube.com.br/embed/' + jQuery(this).attr('data-v') + '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
        console.log(htm);
        jQuery(this).html(htm);
    });
    
});