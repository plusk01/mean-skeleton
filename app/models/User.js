var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');

var SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({
    name: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    admin: Boolean
});

UserSchema.pre('save', function(next) {

    // only hash the password if it has been modified (or new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with the salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password
            user.password = hash;
            next();
        })
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return callback(err);
        callback(null, isMatch);
    });
}

UserSchema.methods.clean = function() {
    var user = this.toObject();
    delete user.password;
    return user;
};

module.exports = mongoose.model('User', UserSchema);