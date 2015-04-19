#!/usr/bin/env node

var pack = require('./')

pack('.').pipe(process.stdout)