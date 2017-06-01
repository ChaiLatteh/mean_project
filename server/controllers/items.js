var mongoose = require('mongoose');

var User = mongoose.model('User');

module.exports = {
  increaseClick: (req, res)=>{
    // console.log(req.session.user)
    User.findOne({_id:req.session.user._id}, (err, user)=>{
      if(err){
        console.log(err)
      }else{
        if(user.multiplier == 0){
          if(user.clicks < 500 ){
            return res.status(500).send('Not enough Gold!')
          }else{
            user.multiplier += 1
            user.clicks -= 500
          }
        }else{
          if(user.clicks < user.multiplier * 1000){
            return res.status(500).send('Not enough Gold!')
          }else{
            user.clicks = user.clicks - user.multiplier * 1000
            user.multiplier += 1
          }
        }
        user.save((err, savedUser)=>{
          if(err){
            console.log(err)
            return res.status(500)
          }else{
            return res.json(user)
          }
        })
      }
    })
  },
  getCost: (req, res)=>{
    User.findOne({_id:req.session.user._id}, (err, user)=>{
      if(err){
        return res.status(500).send(err)
      }else{
        if(user.multiplier == 0){
          return res.send("500")
        }else{
          let cost = user.multiplier * 1000
          return res.send(String(cost))
        }
      }
    })
  }
}
