// Owl Carosel
$(function () {
    var owl1 = $(".owl-one");
    var owl2 = $(".owl-two");
    owl1.owlCarousel({
        items: 6,
        margin: 10,
        loop: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            300: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 6,
                nav: true,
                loop: false
            }
            ,
            1300: {
                items: 6,
                nav: true,
                loop: false
            }
        }
    });

    owl2.owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            300: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
            ,
            1300: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });

});

function openCity(evt, yearName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(yearName).style.display = "block";
    evt.currentTarget.className += " active";
  }