#!/usr/bin/env node

var pack = require('./')
var cwd = process.argv[2]

if (!cwd) {
  console.error('Usage: taco-pack [directory]')
  process.exit(1)
}

pack(cwd).pipe(process.stdout)
