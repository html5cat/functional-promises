const test = require('ava')
const FP = require('../src')

const fetch = require('./data/justsml.github')


// https://github.com/justsml/functional-promises/issues/27
test('Validate Multiple Chained Steps', t => {
  return FP.resolve(fetch('https://api.github.com/users/justsml'))
    .tap(res => `github user req ok? ${res.ok}`)
    .then(res => res.json())
    .then(data => data.avatar_url)
    .tap(url => t.truthy(url && url.length >= 4))
    // .tap(url => console.log('url', url))
    // NEXT LINE SHOULD WORK!!!
})
