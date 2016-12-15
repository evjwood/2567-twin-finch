(function(){

  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.4;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset, 
		  
		  //the line of code has been updated to have the image move to the right, negative to scroll up, and adjust for the element offset since you are using one large image instead of repeating an image background 
		  elementYOffset = el.offsetTop, elBackgrounPos = "100%" + (-((windowYOffset - elementYOffset) * speed)) + "px";
	
      
      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();