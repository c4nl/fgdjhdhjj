var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$("button#button").click(function() {

    var test = $(this).closest('.item');
    var q = $(test).children("div")[1];           

    $(q).css("display", "flex");

});

$(".close").click(function() {

    var q = $(this).closest('#item-modal');

    $(q).css("display", "none");
    
});

}
/*
     FILE ARCHIVED ON 18:58:44 May 02, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:22:33 Jan 08, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 485.54
  exclusion.robots: 0.124
  exclusion.robots.policy: 0.119
  cdx.remote: 0.059
  esindex: 0.008
  LoadShardBlock: 111.441 (3)
  PetaboxLoader3.datanode: 119.61 (4)
  CDXLines.iter: 13.85 (3)
  load_resource: 40.151
  PetaboxLoader3.resolve: 16.566
*/