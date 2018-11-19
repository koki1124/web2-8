//繰り返し
for(var i=1;i<10;i++){
var li =document.createElement('li');
li.textContent=i+'回';
document.getElementById('list').appendChild(li);
}

//カウント
var separate_time =function(time){
  var sec =Math.floor((time / 1000) % 60);
  var min =Math.floor((time / 1000 / 60) % 60);
  var hours =Math.floor((time / 1000 / 60 / 60) % 24);
  var days =Math.floor(time / 1000 / 60 / 60 / 24);
  return [sec, min, hours, days];
}

var now = new Date();
var target = new Date(2018,24,24,0,0,0,0);//日時指定
var diff = target.getTime() - now.getTime();
var counter = separate_time(diff);
document.getElementById('countdown').textContent =
  '黒長のBIRTHDAYまで'+
  counter[3]+'日'+
  counter[2]+'時'+
  counter[1]+'分'+
  counter[0]+'秒';
