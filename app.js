const express = require('express');

var path = require('path');

var passport = require('passport');

//initialize express app
const app = express();

//http server 
const http = require('http').Server(app);

//SOCKET.IO websocket init, 
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
//var test;
//sequelize db
var db = require("./models");



//initialize PUG
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//set Public Folder, javascript + css
app.use(express.static(__dirname + '/public'));

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));

var session = require('express-session')

// require('./passport')(passport);
// require('./routes/users.js')(app, passport);

app.use(session({
    secret: 'project-session',
    resave: true,
    saveUninitialized:true
}));


//Display index.pug on \...:3000/
// app.get('/', function(req, res,next) {  
//     res.render(__dirname + '/views/index.pug');
// });
require('./passport')(passport);

app.use(passport.initialize())
app.use(passport.session())
require('./routes/users.js')(app, passport, io);
require('./routes/index.js')(app, passport)




roomno = 'abc123'
//websocket -> When Client connects ->




// var nsp = io.of('/'+test);
// nsp.on('connection', function(socket){
//         console.log('someone connected');
//         nsp.emit('hi', 'hello everyone');
// })



db.sequelize.sync({
    force: false
  }).then(function () {
    //http.createServer(app).listen(3000)
     http.listen(port, () => console.log('listening on port ' + port));

    // https.createServer(options, app).listen(3000, function () {
    //   console.log("server started at port 3000");
    // });
  });