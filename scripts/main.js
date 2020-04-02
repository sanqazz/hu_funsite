$(function () {
        
    $('.footer div a small').hover(
        function () {
          $(this).addClass('fa-spin');
         
        },
        function () {
          $(this).removeClass('fa-spin');
          
        }
      );

});


 $.SuperBox({
	background : '#FF0000', // Full image background color. Default: #333
 	border : 'white', // Full image border color. Default: #222
 	height : 600, // Maximum full image height. Default: 400
 	view : 'landscape|square|portrait', // Sets ratio on smaller viewports. Default: landscape
 	xColor : '#CCC', // Close icon color. Default: #FFF
 	xShadow : 'embed' // Close icon shadow. Default: none
 });



