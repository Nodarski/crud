const express = require('express')
const app = express();
const route = express.Router()
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport-facebook');
var db = require("../models");
const Users = require('../models').Users;
module.exports = function(app,passport,io)
{

// app.use((bodyParser.urlencoded({ extended: false })))
//app.use(bodyParser.json());
function isAuthenticated(req,res,next) {
    if(req.user)
       return next();
    else
       res.redirect('/login')
    };

app.get('/', function(req, res, next) {
    console.log(req.user)
        db.Posts.findAll({
            raw: true
            //include: [ db.users ]
          }).then(function(users) {
              
              console.log(users)
            res.render(__dirname + '../../views/content.pug', {
              title: 'Posts',
              posts: users,
              user: req.user
            });
        // res.render('index', { title: 'HomePage' });
    
        //res.render(__dirname + '../../views/index.pug');
        
    });
    
    });
    
 
 app.get('/login',function(req,res){
     res.render(__dirname + '../../views/login.pug')
 }) 
 


 app.get('/login/facebook',
 passport.authenticate('facebook')),
    function(req, res) {
        console.log(req.user)
        res.redirect('/' + req.user);
    };
// app.post('/login', passport.authenticate('facebook'),
// function(req, res) {
//     res.send({
//         url:'/',
//         user:req.user
//     });
//   });

  app.get('/login/facebook/return', 
  passport.authenticate('facebook', { successRedirect: '/socket',
            failureRedirect: '/login' }));
  

app.get('/socket', function(req, res){

    io.sockets.on('connection', function(client) {  
        console.log(client.id)
        console.log(res)

       
        //"USER WAS AUTHENTICATED, CONNECTED TO SOCKET!!"
    //     // db.users.create({
    //     //     remote_id: roomno,
    //     //     username: "testUser"
    //     // }).then(data=> {
    //         client.join("room-"+roomno);
    
    //        // io.sockets.in("room-"+roomno).emit('connectToRoom', "You are in room no. "+roomno);
    
    
    //     // })
    
    //     // client.join(room);
    //     // console.log('user joined room #'+room);
    //     // test = Math.floor(Math.random()*90000) + 10000;
    //     // console.log(test)
    //     // console.log(client.id);
    
    //     // client.send(client.id);
    
    // //     when client sends 'join' data
    // // CLIENT SIDE CODE
    // //  socket.emit('join', data);
                               
    // //     client.on('disconnect', function() {
    // //         client.leave(room)
    // //         console.log('user disconnected');
    // //     }); 
        
    //     client.on('room', function (room) {
    //         client.join(room);
    //         console.log("client joined room : " + room);
    //     })
    
    //     // socket.on('chat message', function(msg){
    //     //     io.to(room).emit('chat message', msg);
    //     //   });
    
    
         client.on('join', function(data) {
            console.log(data);
         });
    //         client.emit('messages', 'Hello from server! TEST NUMBER IS: ');
    
    //         socket.on('messages', function(data) {
    //             alert('Hello from server');
    // });
    //    });
    
    //     if(io.nsps['/'].adapter.rooms["room-"+roomno] && io.nsps['/'].adapter.rooms["room-"+roomno].length > 1) roomno++;
    //    client.join("room-"+roomno);    
       
    
        // client.on('messages', function(data) {
        //     console.log(data)
        //     // client.emit('broad', data);
        //     // client.broadcast.emit('broad',data);
        //     io.client.in('abc123').emit('messages', "it fucking worked!");
        // });
    
    });





    res.redirect('/')


}
);    

app.get('/logout',isAuthenticated, function(req, res){
    req.logout();
    res.redirect('/');
  });
}

