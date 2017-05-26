angular.module('honeyBookApp')
.directive("hoveringCard", function() {
    return {
        restrict : "A",
        link:  function link(scope, element) {
        	//handeling the hover state on a card
      		element.hover(function() {
				/* when the mouse enters the element */
				$(this).addClass('card-wrap-hover');
				$(this).find(".hidden-text").css("display","block");
			}, function() {
				/* when the mouse leaves the element */
				$(this).removeClass('card-wrap-hover');
				$(this).find(".hidden-text").css("display","none");
			});
    	}
    };
});
