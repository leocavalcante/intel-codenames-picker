const fetch = require('fetch')
const cheerio = require('cheerio')
const sample = require('lodash.sample')

const wikipediaUrl = 'https://en.wikipedia.org/wiki/List_of_Intel_codenames'

const handlePromise = (resolve, reject) => {
  const hereWeGo = $ => {
    const tds = $('.wikitable').find('td:first-child')
    const codenames = tds.map((i, td) => $(td).text()).get()
    const codename = sample(codenames)

    resolve(codename)
  }

  const parse = html => hereWeGo(cheerio.load(html))
  const handleFetchComplete = (err, meta, body) => parse(body.toString())

  fetch.fetchUrl(wikipediaUrl, handleFetchComplete)
}

const pick = () => {
  return new Promise(handlePromise)
}

module.exports = {
  pick,
}
