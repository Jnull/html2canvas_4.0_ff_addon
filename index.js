// index.js
var pageMod = require("sdk/page-mod");
pageMod.PageMod({
  include: /.*/,
  contentScriptFile: ["./html2canvas_4.0.js", "./pagemod.js"],
  contentScriptWhen: "end",
  attachTo: ["existing", "top", "frame"],
  onAttach: function(worker) {
   //require("sdk/preferences/service").set("javascript.enabled", false);
  }
});