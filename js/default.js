//繰り返し
for(var i=1;i<10;i++){
var li =document.createElement('li');
li.textContent=i+'回';
document.getElementById('list').appendChild(li);
}

//カウント
var separate_time =function(time){
  var sec =time.getSeconds();
  var min =time.getMinutes();
  var hours =time.getHours();
  var days =time.getDate();
  var month =time.getMonth();
  var year =time.getFullYear();
  return [sec, min, hours, days, month, year];
}

var now = new Date();
var target = new Date(1811,24,24,0,0,0,0);
var diff = target.getTime() - now.getTime();
var counter = separate_time(diff);
document.getElementById('countdown').textContent =
  '黒長のBIRTHDAYまで'+
  counter[5]+'年'+
  counter[4]+'月'+
  counter[3]+'日'+
  counter[2]+'時'+
  counter[1]+'分'+
  counter[0]+'秒';
