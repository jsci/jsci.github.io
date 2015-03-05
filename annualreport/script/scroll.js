// setSkrollr function extracted from https://www.pingdom.com/2013/
var setSkrollr = function($el, data) {
    for (var i = 0, l = data.length; i < l; i++) {
        var d = data[i],
            px = d[0];
            css = d[1];
        $el.attr('data-' + px, css);
    }
}

jQuery(function($) {
    setSkrollr($('#box'), 
        [[0, 'transform:translateX(5px), transform:translateY(5px)'], 
        [.5, 'transform:translateY(10px)'], 
        [900, 'transform:translateX(300px)']]);
    
    skrollr.init({
        smoothScrolling: false
    });
});