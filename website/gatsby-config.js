const { getGatsbyConfig } = require('smooth-doc/config')

module.exports = getGatsbyConfig({
  root: __dirname,
  name: 'Jest-Puppeteer',
  slug: 'jest-puppeteer',
  github: 'https://github.com/smooth-code/svgr',
  menu: ['About', 'Usage', 'Recipes'],
  nav: [{ title: 'Usage', url: '/docs/' }],
})
