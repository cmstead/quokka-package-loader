const path = require('path');

function loaderFactory(localDir) {
    return {
        load: (modulePath) =>
            require(path.join(localDir, modulePath))
    }
}

module.exports = {
    before: function () {
        global.loaderFactory = loaderFactory;
    }
}