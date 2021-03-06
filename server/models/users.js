let mongoose = require('mongoose');
var bcrypt = require('bcrypt');

let Schema = mongoose.Schema;
let UserSchema = new Schema({
  username: {type: String, required:true},
  password: {type: String, required:true},
  clicks: {type: Number, default:0},
  multiplier: {type: Number, default:0}

}, {timestamps: true});

UserSchema.pre('save', function(next){
  var user=this;
  if (!user.isModified('password')){
    return next();
  }
  bcrypt.genSalt(9, function(err, salt){
    if(err){
      return next(err);
    }
    bcrypt.hash(user.password, salt, function(err,hash){
      if(err){
        return next(err);
      }
      user.password=hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, callback){
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if(err){
      return callback(err);
    }
    callback(undefined, isMatch);
  })
}

mongoose.model('User', UserSchema);
