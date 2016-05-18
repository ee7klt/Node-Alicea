var configValues = require('./config');


module.exports = {
    getDbConnectionString: function() {
        return `mongodb://${configValues.uname}:${configValues.password}@ds023932.mlab.com:23932/nodetodo-alicea`
    }
}


