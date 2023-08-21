var express = require('express');
var router = express.Router();
var userHelper = require('../helpers/user-helpers');
const { response } = require('../app');


/* GET home page. */
router.get('/', function (req, res, next) {
  let user = req.session.user
  if (user) {
    res.render('index')
  } else {
    res.render('user/login');
  }
});

router.post('/', (req, res) => {
  console.log(req.body);
  userHelper.addToCart(req.session.user,req.body.Time).then(() => {
    console.log(req.body);
    //res.redirect('/')
  })
}) 

router.get('/signup', (req, res) => {
  res.render('user/signup')
})

router.post('/signup', (req, res) => {
  userHelper.doSignup(req.body).then((response) => {
    res.redirect('/signup')
  })
})

router.get('/login', (req, res) => {
  let user = req.session.user
  if (user) {
    res.redirect('index')
  } else {
    res.redirect('user/login');
  }
})

router.post('/login', (req, res) => {
  userHelper.doLogin(req.body).then((response) => {
    if (response.status) {
      req.session.loggedIn = true
      req.session.user = response.user
      res.redirect('/')
    } else {
      res.redirect('/login')
    }
  })
})


module.exports = router;
