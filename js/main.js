$('.slider-container').slick();

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
/*
$(".tourselectiontransport")
.find("div")
.click(function () {
  let activeColor = "rgb(0, 164, 255)";
  let noColor = "white";
  let nextAfterActive = "#e4e4e4";
  //remove current state
  $(".tourselectiontransport").find("div").css("background-color", noColor);

  //select active
  $(this).css("background-color", activeColor);

  //update next
  let curActiveIndex = 0;
  let tabsArray = [];
  $(".tourselectiontransport").find("div")
  .each(
    function(index){
      tabsArray.push($(this));

      if($(this).css('background-color') == activeColor){
        curActiveIndex = index;
      }
    }
  );
  
  let nextTabIndex = 0;
  if(curActiveIndex !== tabsArray.length - 1){
    nextTabIndex = curActiveIndex + 1;
  }
  tabsArray[nextTabIndex].css("background-color", noColor);
});*/


