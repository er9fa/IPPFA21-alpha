const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/nedspage', (req, res) => res.render('pages/nedspage'))
  .get('/rishabspage', (req, res) => res.render('pages/rishabspage'))
  .get('/aboutpage', (req, res) => res.render('pages/aboutpage'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
