'use strict';
import express from 'express';
import consign from 'consign';

const app = express();

//we include all our file dependencies in order of execution 
consign({
	cwd: __dirname
})
	.include('config')
    //.then('data')
    //.then('domain')
    //.then('presentation')
	//.then('routes')
	.into(app);

