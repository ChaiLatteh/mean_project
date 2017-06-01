var mongoose = require('mongoose');

var User = mongoose.model('User');

module.exports = {
  register: (req, res)=>{
    User.findOne({username:req.body.username},(err,user)=>{
      if(user==null){
        let newUser = new User(req.body);
        newUser.save((err, savedUser)=>{
          if(err){
            console.log(err);
            return res.sendStatus(500);
          }
          else{
            return res.json(savedUser);
          }
        })
      }
      else{
        return res.status(500).send("Entered username already exists.");
      }
    })
  },
  login: (req, res)=>{
    User.findOne({username:req.body.username}, function(err, user){
      if(err){
        console.log(err);
        return res.status(500).send("Something went wrong.");
      }
      if(!user){
        return res.status(404).send("Username or Password does not match.");
      }
      user.comparePassword(req.body.password, function(err, isMatch){
        if(isMatch == true){
          req.session.user = user;
          res.json(user);
        }
        else{
          return res.status(401).send("Password does not match.")
        }
      })
    })
  },
  getCurrentUser: (req, res) => {
    if(!req.session.user){
      return res.status(401).send("No user in session");
    }
    else{
      return res.json(req.session.user);
    }
  },
  updateCurrentUser: (req, res)=>{
    User.findOne({username:req.session.user.username}, (err, user)=>{
      if(err){
        console.log(err);
        return res.status(500).send();
      }
      else{
        res.json(user);
      }
    })
  },
  buttonClicked: (req, res)=>{
    User.findOne({username:req.session.user.username}, (err, user)=>{
      if(err){
        console.log(err);
        return res.status(500).send("ERROR");
      }
      else{
        user.clicks+=1;
        user.save((err, user)=>{
          if(err){
            console.log(err);
            return res.status(500).send("Could not save clicks");
          }
          else{
            res.json(user);
          }
        })
      }
    })
  }
  //NEW METHOD HERE
}
