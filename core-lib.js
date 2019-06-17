var srollAnimation = function(obj) {
  var className 	= (obj.className != undefined) ? obj.className : 'scroll-obj';
  var gap 	= (obj.gap != undefined) ? obj.gap : 100;
  var callback 	= (obj.callback != undefined) ? obj.callback : function() {};
  var elmts = jQuery('.' + className);
  jQuery(window).on('scroll', checkOffset);
  jQuery(window).on('resize', checkOffset);
  function checkOffset() {
    var scroll = jQuery(window).scrollTop();
    for(var i = 0; i < elmts.length; i++) {
      if(jQuery(elmts[i]).offset().top - scroll <= jQuery(window).height() - gap) {
        callback(elmts);
      }
    }
  }
}

var myAnimation = new srollAnimation ({
  className: 'desc-box',
  gap: 100,
  callback: animPannel,
});
