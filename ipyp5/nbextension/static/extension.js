define(function() {
    "use strict";

    window['requirejs'].config({
        map: {
            '*': {
                'jupyter-p5': 'nbextensions/jupyter-p5/index',
            },
        }
    });
    // Export the required load_ipython_extention
    return {
        load_ipython_extension : function() {}
    };
});
