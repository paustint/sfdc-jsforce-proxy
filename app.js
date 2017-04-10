var express = require('express');
var jsforceAjaxProxy = require('jsforce-ajax-proxy');

var app = express();

app.all('/proxy/?*', jsforceAjaxProxy({ enableCORS: true }));

module.exports = app;
