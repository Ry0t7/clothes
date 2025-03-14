(function($) {
    var $nav   = $('.nv');
    var $btn   = $('.toggle_btn');
    var $btnBd   = $('.toggle_btn_bd');
    var $link  = $('.inner-list-btn');
    var $mask  = $('.mk');
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
        if ( ! $nav.hasClass( open ) ) {
            $nav.addClass( open );
            $btnBd.addClass( open );
            $mask.addClass( open );
        } else {
            $nav.removeClass( open );
            $btnBd.removeClass( open );
            $mask.removeClass( open );
        }
    });
    // mask close
        $mask.on('click', function() {
        $nav.removeClass( open );
        $btnBd.removeClass( open );
        $mask.removeClass( open );
        });
    
        $link.on('click', function() {
        $nav.removeClass( open );
        $btnBd.removeClass( open );
        $mask.removeClass( open );
        });
} )(jQuery);
