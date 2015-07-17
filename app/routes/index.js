module.exports.index = function(req, res) {
  res.render('index');
};

module.exports.dayAlbum = function(req, res) {
    var day = req.params.day;


    var photos = [];

    res.render('album', {day: day, photos: photos});
};

module.exports.admin = function(req, res) {
    res.render('admin');
};