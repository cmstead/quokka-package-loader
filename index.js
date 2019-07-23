const path = require('path');

function loaderFactory(localDir) {
    
    function load(modulePath) {
        return require(path.join(localDir, modulePath));
    }

    return {
        load
    }
}

module.exports = {
    before: function(configuration) {
        global.loaderFactory = loaderFactory;
    }
}