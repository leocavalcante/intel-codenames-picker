#!/usr/bin/env node
const picker = require('./index')
const slug = require('slug')

picker.pick().then(codename => {
  if (process.argv.includes('--slug')) {
    codename = slug(codename, {lower: true})
  }

  console.log(codename)
})
