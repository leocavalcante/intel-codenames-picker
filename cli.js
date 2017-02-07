#!/usr/bin/env node
const picker = require('./index')
picker.pick().then(codename => console.log(codename))
