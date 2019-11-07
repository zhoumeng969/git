require('../css/entry.css');
var tool = require('./tool.js');		//require是模块引入的关键词
tool.hello('3556262');

var oImg = new Image();
oImg.src = require('../img/logo.jpg');
document.body.appendChild(oImg); 