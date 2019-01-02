const commonModel = require('../models/common');

exports.getApiTest = (req, res, next) => {
    commonModel.getDbList(function(err, resp) {
        if (!err) {
            res.status(200).json({
                message: 'API Test : ' + resp
            });
        } else {
            res.status(500).json({
                message: 'API Test : ' + resp
            });
        }
    });
};