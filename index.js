const path = require('path');

function loaderFactory(localDir) {
    function loadFile(modulePath) {
        return require(path.join(localDir, modulePath));
    }

    function importFile(modulePath) {
        try{
            return import(path.join(localDir, modulePath))
        } catch (e) {
            return Promise.reject(new Error('Import not yet supported by node. Sorry. :-('));
        }
    }

    return {
        load: loadFile,
        import: importFile
    }
}

module.exports = {
    before: function () {
        global.loaderFactory = loaderFactory;
    }
}