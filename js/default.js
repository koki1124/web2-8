//繰り返し
for(var i = 1; i < 10; i++){
  var li = document.createElement('li');
  li.textContent = i + '回目';
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
var update = function(){
var now = new Date();
var target = new Date(2020,24,24,0,0,0,0);//日時指定
var diff = target.getTime() - now.getTime();
var counter = separate_time(diff);
document.getElementById('countdown').textContent =
  '世界滅亡まで'+
  counter[3]+'日'+
  counter[2]+'時'+
  counter[1]+'分'+
  counter[0]+'秒';
refresh();//タイマー
}
var refresh = function(){
  setTimeout(update, 1000);
}
update();

//画面移動
function getFileName(){
  return window.location.href.split('/').pop();
}

var filename = getFileName();
var opt;
if(filename === 'other.html'){
  opt = document.querySelector('option[value="other.html"]');
}else{
  opt = document.querySelector('option[value="index.html"]');
}
opt.select = true;

document.getElementById('form').select.onchange = function(){
  location.href = document.getElementById('form').select.value;
}

//cookie保存
function setCookie(c_name,value,expiredays){
  //期限日付
  var extime = new Date().getTime();
  var cltime = new Date(extime + (60*60*24*1000*expiredays));
  var exdate = cltime.toUTCString();
  //cookieに保存する文字列保存
  var s="";
  s += c_name +"="+ escape(value);
  s += "; path="+ location.pathname;
  if(expiredays){
    s += "; expires=" +exdate+"; ";
  }else{
    s += "; ";
  }
  //cookie保存
  document.cookie=s;
}

//cokkieの値獲得
function getCookie(c_name){
  var st="";
  var ed="";
  if(0 < document.cookie.length){
    st=document.cookie.index0f(c_name + "=");
    if(st!=-1){
      st=st+c_name.length+1;
      ed=document.cookie.index0f(";",st);
      if(ed==-1) ed=document.cookie.length;
      return unescape(document.cookie.substring(st,ed));
    }
  }
  return "";
}

