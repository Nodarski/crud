require('dotenv').config()
const Strategy = require('passport-facebook').Strategy
const Users = require('./models').users
module.exports = function(passport)
{
    


passport.use(new Strategy({
    clientID: process.env.id,
    clientSecret: process.env.SECRET,
    callbackURL: 'http://localhost:3000/login/facebook/return',
    profileFields: ['id', 'displayName']
  },function(accessToken, refreshToken, profile, cb) {
console.log(profile.id)
    Users.findOne({
        where: {
            remote_id: profile.id
        }
    }).then(function(user) {

        //console.log('this equals=' +user)

        if (user)
        {
            console.log('welcome back')
            return cb(null, true)
        } else
        {
            Users.create({
                remote_id:profile.id,
                username:profile.displayName
            }).then(function(newUser, created) {
                if (!newUser) {
                    return cb(null, false);
                }

                if (newUser) {
                    return cb(null, newUser);
                }
            })

        }
    })
    
    // console.log(accessToken)
    // console.log(refreshToken)
    // console.log(profile.id)
    // In this example, the user's Facebook profile is supplied as the user
    // record.  In a production-quality application, the Facebook profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
   // return cb(null, profile);
  }));
  console.log("passport is working");
//   passport.serializeUser(function (user, done) {
//     console.log("Serialize");
//       return done(null, user.id);
      
  
//   })
  
//   passport.deserializeUser(function (id, done) {
//       console.log("DeSerialize");
//       Users.findById(remote_id).then((users) => {
//           console.log(users);
//           return done(null, users);
//       });
//   })
passport.serializeUser(function(user, done) {
    console.log(user)
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
      
    done(null, user);
  });

}



