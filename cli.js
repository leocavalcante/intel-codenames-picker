#!/usr/bin/env node
const picker = require('./index')
const slug = require('slug')

picker.pick().then(codename => {
  if (process.argv.includes('--slug')) {
    codename = slug(codename, {lower: true})
  }

  if (process.argv.includes('--no-spaces')) {
    codename = slug(codename, '')
  }

  console.log(codename)
})
