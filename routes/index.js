const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', async  function(req, res, next) {
  let  data = {
    message: 'Hello world!',
    layout:  'layout.njk',
    title: 'Nunjucks example'
  }

  res.render('index.njk', data)
})

module.exports = router;
