'use strict'

var express = require('express')
var router = express.Router();

router.get('/', (req, res, next) => {
    res.send(
        {
            "Title":"API JSON to Excel send e-mail",
            "version":"1.0",
            "Date Created":"since 2020"
        }
    )
});


module.exports = router;