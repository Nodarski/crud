const express = require('express')
const app = express();
const route = express.Router()
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport-facebook');
var db = require("../models");
const Users = require('../models').Users;
module.exports = function(app,passport)
{

// router.get('/', function(req, res, next) {
// console.log("USER USER USER = " + req.user)
//     db.Posts.findAll({
//         include: [ db.users ]
//       }).then(function(users) {
//           console.log(users)
//         res.render(__dirname + '../../views/index.pug', {
//           title: 'Posts',
//           users: users,
//           user: req.user
//         });
//     // res.render('index', { title: 'HomePage' });

//     //res.render(__dirname + '../../views/index.pug');
    
// });

// });

// router.get('/r', function(req, res, next){
//     db.users.findAll({      }).then(function(users) {
//         console.log(JSON.stringify(users))
//         res.render('../views/test.pug', {
//             title: 'Sequelize: Express Example',
//             users: users
//     });


// });
// });

app.get('/mobile', function(req, res, next) {
    console.log(req.user)
       
            res.render(__dirname + '../../views/mobile.pug', {
              title: 'Posts',
              user: req.user
            });
    //res.render(__dirname + '../../views/test.pug',{user:'hello'})
});

app.get('/mobile/login',function(req,res){
    res.render(__dirname + '../../views/mobileLogin.pug')
}) 

app.get('/mobile/login/facebook',
 passport.authenticate('facebook')),
    function(req, res) {
        console.log(req.user)
        res.redirect('/' + req.user);
    };

app.get('/login/facebook/return', 
passport.authenticate('facebook', { successRedirect: '/',
            failureRedirect: '/login' }));

}