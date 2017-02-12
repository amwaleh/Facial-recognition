var cv = require('openCv');
var camera = new cv.VideoCapture(1);
var camWidth = 620;
var camHeight = 440;
camera.setWidth(camWidth);
camera.setHeight(camHeight);

  setInterval(function() {
camera.read(function(err, im){
  im.detectObject(cv.FACE_CASCADE, {}, function(err, faces){
    for (var i=0;i<faces.length; i++){
      var x = faces[i];
      im.ellipse(x.x + x.width/2, x.y + x.height/2, x.width/2, x.height/2);
    }
    im.save('./out.jpg');
  });
})
},500)
