var srollAnimation = function(obj) {
  var className = (obj.className != undefined) ? obj.className : 'scroll-obj';
  var gap = (obj.gap != undefined) ? obj.gap : 100;
  var callback 	= (obj.callback != undefined) ? obj.callback : function() {};
  var elmts = $('.' + className);
  $(window).on('scroll', checkOffset);
  $(window).on('resize', checkOffset);
  function checkOffset() {
    var scroll = $(window).scrollTop();
    for(var i = 0; i < elmts.length; i++) {
      if($(elmts[i]).offset().top - scroll <= $(window).height() - gap) {
        callback(elmts);
      }
    }
  }
}

var myAnimation = new srollAnimation ({
  className: 'desc-box',
  gap: 100,
  callback: callbackFunc,
});

function callbackFunc(elmts) {
  $(this).show();
}
