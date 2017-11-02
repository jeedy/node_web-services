#!/usr/bin/env node 
'use strict';

const
    express = require('express'),
    logger = require('morgan'),
    app = express();

// app.use(express.logger('dev')); 4 version부터 morgan 모듈로 지원함
app.use(logger('dev'));
app.get('/api/:name', function(req, res){
    //res.json(200, {"hello":req.params.name});
    res.status(200).json({"hello":req.params.name});
});
app.listen(3000, function(){
    console.log("ready captain.");
});