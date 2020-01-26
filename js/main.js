$('.slider-container').slick({
  autoplay: true,
  autoplaySpeed: 3000,
});

$('.sl-container').slick({
  autoplay: true,
  autoplaySpeed: 3000,
});

$('.sl-tourcost').slick({
  autoplay: true,
  autoplaySpeed: 3000,
});

$(".burger")
.click(function () {
  if($("ul.mob-container").hasClass("hidden")){
    $("ul.mob-container").removeClass("hidden");
  } 
  else
  {
    $("ul.mob-container").addClass("hidden");
  }
});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}


