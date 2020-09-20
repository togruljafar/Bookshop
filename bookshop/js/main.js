// jquery add active class to nav-item
$(".nav-link").click(function(){
  $('.nav-item').removeClass('active');
  $(this).parent().addClass("active");
});

// owl carousel call
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    items:1,
    pagination:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1200,
    autoplayHoverPause:true
})

// open menu exit button Function 
let navbar = document.querySelector(".nav-menu");
let hamburg = document.querySelector(".hamburger-menu");

hamburg.addEventListener('click', () => {
  navbar.classList.toggle('change');
})
window.addEventListener('mouseup', (e) => {
  if(e.target != navbar) {
    navbar.classList.remove('change');
  }
})


// Load more script
$(function() {
    let screenWidth = $('html').outerWidth();
    let itemsPerPageWidth = {
        375:3,
        425:4,
        768:3,
        1440:5
    };

    let widthKeys = Object.keys(itemsPerPageWidth).filter(key => screenWidth<=key);
    let loadItemNumber = itemsPerPageWidth[Math.min(...widthKeys)];

    $(".card")
        .slice(0, loadItemNumber)
        .show();
    $("#load-more").on("click", function(e) {
        e.preventDefault();
        $(".card:hidden")
            .slice(0, loadItemNumber)
            .slideDown();
        if ($(".card:hidden").length == 0) {
            $("#load-more").fadeOut("slow");
        }
        // $("html,body").css({overflowY:'hidden'});
        $("html,body").animate(
            {
                scrollTop: $(this).offset().top
            },
            1500,
            () => {
                setTimeout(function(){
                    $("html,body").css({overflowY:'inherit'});
                },100);
            }
        );
    });
});

// Load More Script for card-2
$(function() {
    let screenWidth = $('html').outerWidth();
    let itemsPerPageWidth = {
        375:3,
        425:4,
        1440:3
    };

    let widthKeys = Object.keys(itemsPerPageWidth).filter(key => screenWidth<=key);
    let loadItemNumber = itemsPerPageWidth[Math.min(...widthKeys)];

    $(".card-2")
        .slice(0, loadItemNumber)
        .show();
    $("#load-more-2").on("click", function(e) {
        e.preventDefault();
        $(".card-2:hidden")
            .slice(0, loadItemNumber)
            .slideDown();
        if ($(".card-2:hidden").length == 0) {
            $("#load-more-2").fadeOut("slow");
        }
        // $("html,body").css({overflowY:'hidden'});
        $("html,body").animate(
            {
                scrollTop: $(this).offset().top
            },
            1500,
            () => {
                setTimeout(function(){
                    $("html,body").css({overflowY:'inherit'});
                },100);
            }
        );
    });
});

// catagory slide
let slides = document.getElementsByClassName("catagory-slide"),
  index=0;

function show() {
  let i;
  for(i=0; i<slides.length; i++) {
    slides[i].style.display = "none";
  }

  index++;
  if(index>slides.length) {
    index = 1;
  }

  slides[index-1].style.display = "flex";
  setTimeout(show, 4000);
}
show();