$(document).ready(function() {
    var hasQuickTime = (function() {
        if (navigator.plugins != null && navigator.plugins.length > 0) {
            for (var i=0; i < navigator.plugins.length; i++ ) {
                var plugin = navigator.plugins[i];
                if (plugin.name.indexOf("QuickTime") > -1) {
                    var deviceAgent = (navigator.userAgent || "").toLowerCase();
                    return !deviceAgent.match(/(iphone|ipod)/);
                }
            }
        }
        return false;
    })();
    
    var embedCode = function(file) {
        if (hasQuickTime) {
            return '<object id="id3" type="video/quicktime" width="300" height="316" data="' + file + '">\
               <param name="src" value="' + file + '">\
               <param name="controller" value="true">\
               <param name="autoplay" value="false">\
               <param name="scale" value="tofit">\
               <param name="volume" value="100">\
               <param name="loop" value="false">\
            </object>';
        }
        
        return '<a class="fallback" href="' + file + '">Download Podcast</a>';
    };
    
    $(".player").each(function(index) {
        var $this = $(this);
        $this.addClass((!hasQuickTime ? "no" : "") + "quicktime");
        $this.html(embedCode($this.data("file")));
    });
    
    $(".episodes article").click(function(e) {
       $(this).toggleClass("expanded"); 
    });
});