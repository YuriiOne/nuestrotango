(function ($) {
    "use strict";
    var input = $('.validate-input-at .input-at');
    $('#submit-at').on('click',function(e){
        e.preventDefault();  //снимает дефолтное поведение type submit
        var check = true;
        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }
        // Отправка формы        
        if (check == true) {
            $.post("/send.php", $(".form-at input, .form-at textarea").serialize(),
            function(data){
                if(data.frm_check == 'error'){             
                    $(".result-at").html("<div class='error-at'>Помилка: " + data.msg + "</div>");                     
                    } else {
                    $(".result-at").html("<div class='success-at'>Повідомлення відправлено</div>"); 
                    $(".form-at").fadeOut(0); // спрятать форму 
                    $(".input-at").val(""); // находит все input и обнуляет значения
                }
            }, "json");
            return false;
        }
    });
    $('.form-at .input-at').each(function(){
        $(this).focus(function(){
            hideValidate(this);
        });
    });
    function validate (input) {
        /* Валидация формы*/
            if($(input).attr('type') == 'email' || $(input).attr('name') == 'email-at') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            return false;
            }
            }
        
        if($(input).val().trim() == ''){
            return false;
        }
    }
    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }
    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }
})(jQuery);
//jQuery(document).ready(function (t) or jQuery(function (t) {
jQuery(document).ready(function (t) {
  t(window).on("scroll", function () {
    var e = t(".navbar");
    e.length &&
      t(".scrolling-navbar")[e.offset().top > 50 ? "addClass" : "removeClass"](
        "top-nav-collapse"
      );
  });
});
$(document).ready(function () {
  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none"
  });

  $(".zoom").hover(
    function () {
      $(this).addClass("transition");
    },
    function () {
      $(this).removeClass("transition");
    }
  );
});
function initMap() {
  if (window.innerWidth >= 768) {
    var pos = { lat: 50.5058355, lng: 30.2231333 };
  } else {
    var pos = { lat: 50.506489, lng: 30.236578 };
  }
  //var  pos = {lat: 50.5337356, lng: 30.2188709}; 50.5335021, lng: 30.2330265
  //var  pos = {lat: 50.5337356, lng: 30.2188709}; position for desctop
  //var  pos = {lat: 50.5335021, lng: 30.2330265}
  var opt = {
    center: pos,
    zoom: 15,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#212121"
          }
        ]
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#212121"
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e"
          }
        ]
      },
      {
        featureType: "administrative.land_parcel",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd"
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#181818"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161"
          }
        ]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#1b1b1b"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#2c2c2c"
          }
        ]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#8a8a8a"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#373737"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#3c3c3c"
          }
        ]
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [
          {
            color: "#4e4e4e"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000"
          }
        ]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#3d3d3d"
          }
        ]
      }
    ]
  };
  var myMap = new google.maps.Map(document.getElementById("map"), opt);
  var marker = new google.maps.Marker({
    position: { lat: 50.505602, lng: 30.2375889 },
    map: myMap,
    title: "Nuestro tango school"
  });
  console.log(marker);
  var info = new google.maps.InfoWindow({
    content: "<h3>Tango School</h3>"
  });
  /*marker.addEventListener('click', function(){
      info.open(myMap, marker);
    });*/
}

/*$(document).ready(function() {
  
});*/
