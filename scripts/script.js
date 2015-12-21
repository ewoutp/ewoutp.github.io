// Overlapping emblems
var blocks = new Array("giantswarm", "subliminl", "jnode","dot42", "deepsea", "pdfm", "trains", "more");
function positionEmblems() {
  $(blocks).each(function(index, block) {
    var emRadius  = ($("#" + block + " .emblem").height() / 2);
    var emPos     = $("#" + block + " .emblem").offset();
    var emTop     = emPos.top - 11;
    var divPos    = $("#" + block).offset();
    var divTop    = divPos.top;
    var scrollTop = $(document).scrollTop();
    if ((emTop < scrollTop) && (emTop >= 0)) {
      $("#" + blocks[index - 1] + " .emblem").hide();
      $("#" + block + " .emblem").addClass("fixedpos");
      if (block == blocks[0]) $("#bar").addClass("lifted");
    } else if(divTop - emRadius - 11 > scrollTop) {
      $("#" + blocks[index - 1] + " .emblem").show();
      $("#" + block + " .emblem").removeClass("fixedpos");
      if (block == blocks[0]) $("#bar").removeClass("lifted");
    }
  });
}
$().ready(function() {
  $("#" + blocks[0] + " .emblem").addClass("fixedpos");
  $(window).bind('scroll touchmove', positionEmblems);
  positionEmblems();
});
