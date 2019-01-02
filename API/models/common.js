// var db = require('../../dbConnection'); 
const commonModel = {
    getDbList: function(callback) {
        //db.query("call sp_get_countires()", res);
        return callback('', 'test');
    }
};

module.exports = commonModel;