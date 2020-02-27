    jQuery(function(t) {
      t(window).on("scroll", function() {
        var e = t(".navbar");
        e.length &&
          t(".scrolling-navbar")[
            e.offset().top > 50 ? "addClass" : "removeClass"
          ]("top-nav-collapse");
      });
    });
