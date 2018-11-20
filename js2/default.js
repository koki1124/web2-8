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
    st=document.cookie.indexOf(c_name + "=");
    if(st!=-1){
      st=st+c_name.length+1;
      ed=document.cookie.indexOf(";",st);
      if(ed==-1) ed=document.cookie.length;
      return unescape(document.cookie.substring(st,ed));
    }
  }
  return "";
}
//cookie読み込んで表示
var last_date = getCookie('lastDate');
if(last_date){
  document.getElementById('cookie').textContent = '前回訪れた時間:' + last_date;
}else{
  document.getElementById('cookie').textContent = '初めまして';
}
//新しい値の保存
var current_time = new Date();
setCookie('lastDate', current_time.toString(), 7);


