//pagemod.js

//* working.
html2canvas(document.body, {
    taintTest:false,
    logging:true,
    allowTaint: true,
    useCORS: true,
    onrendered: function(canvas) {
        document.documentElement.replaceChild(canvas, document.body);
    }
});
//*/