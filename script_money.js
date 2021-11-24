var day = [
"고양이가 너무 귀여워서 벽을 쾅쾅 쳤더니 다 무너져서 옆집이랑 인사했다",
"마음으로 낳아 지갑으로 길렀다", 
"고양이가 집주인이고 나는 고양이 집에 세들어 사는거다",
"절대온도 영도란 켈빈척도로 표현되는 온도 체계로서, 열역학적으로 생각할 수 있는 최저 온도에 해당한다.",
"OOO점집의 OOO법사가 알려주는 합격운과 시험운을 높이는 방법 입니다.", 
"서울대학교라는 이름 자체가 본인 스스로 자랑스러워질 수 있는 학교라고 생각합니다.",
"천지(天地)의 창조주(創造主)이며 전지전능하고 영원한 존재로서, 우주 만물을 섭리로써 다스리는 하느님",
"절대자 : 다른 무엇과도 비교되지 않고 동등한 존재도 없는 것"],
  allDays = day.length,
  firstDay = 0,
  change = $('#day'),
  changeDay = function() {
    change.html(day[firstDay]);
    firstDay = (firstDay + 1) % allDays;
  }

function ohNo() {
  ohYeah = setInterval(changeDay, 300);//must match css animation
};

$('#day').click(function() {
  $('body').removeClass('uhoh');
  ohNo();
}, function() {
  clearInterval(ohYeah);
  
});

function TextShuffle(_txt){
	var _this = this;
	_this._index = 0;
	
	var _finalString, _finalLength, _currentString = "";
	var _randChars = [" ","A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "R", "S","ㄱ","ㄴ","ㄷ","ㄹ","ㅁ","ㅂ","ㅅ","ㅇ","ㅈ","ㅊ","ㅎ","ㅋ","ㅌ","ㅍ","ㅏ","ㅑ","ㅢ","ㅞ","ㅠ","ㅖ"];
	var _chars = _randChars.length;
	var _casing = 1; //0=normal, 1=upper, 2=lower
	
	_this.to = function(_newStr, _time, casing){
		_finalString = _newStr, _casing = casing;
		_finalLength = _finalString.length, _this._index = 0;
		TweenLite.killTweensOf(_this);
		TweenLite.to(_this, _time || 2, {_index:_finalLength * (Math.random()+2.1), ease:Quad.easeOut, onUpdate:shuffle});
	}

	function shuffle(){
		//Start writing the correct text when halfways
		if(_this._index > _finalLength) _currentString = _finalString.slice(0, _this._index - _finalLength) + randomString().slice(0, _finalLength - _this._index);
		else _currentString = randomString();
		
		if(_casing == 0) _txt.innerHTML = _currentString;
		else if(_casing == 1) _txt.innerHTML = _currentString.toUpperCase();
		else _txt.innerHTML = _currentString.toLowerCase();
	}

	function randomString(){
		var _char = "", _str = "";
		for(var i = 0; i < _this._index * .5; ++i){
			_char = _randChars[Math.floor(Math.random() * _chars)];
			if(_casing == 2) _char = _char.toLowerCase();
			_str += _char;
		}
		return _str;
	}
}

var _index = -1;
var _demoTexts = [
"사랑은 돈으로 살 수 있다",
"하느님은 돈으로 살 수 있다",
"확률은 돈으로 살 수 있다",
"시험은 돈으로 살 수 있다",
"전지전능은 돈으로 살 수 있다",
"마술은 돈으로 살 수 있다",
"가재는 돈으로 살 수 있다",
"집주인은 돈으로 살 수 있다",
"루브르는 돈으로 살 수 있다",
"임금은 돈으로 살 수 있다",
"옆집은 돈으로 살 수 있다",
"손톱 돈으로 살 수 있다",
"마술은 돈으로 살 수 있다",
"켈빈척도는 돈으로 살 수 있다",
"든든은 돈으로 살 수 있다",
"감옥은 돈으로 살 수 있다",
"창조주는 돈으로 살 수 있다",
"참치는 돈으 로 살 수 있다",
"백일기도는 돈으로 살 수 있다",
"수학은 돈으로 살 수 있다",
"절대영도는 돈으로 살 수 있다",
"자랑은 돈으로 살 수 있다",
"점집은 돈으로 살 수 있다",
];
var _random = _demoTexts[Math.floor(Math.random() * _demoTexts.length)]
//var _textSample = _random
//_random부분이 index를 받아주면 작동할거같음

//_shuffle = new TextShuffle(document.getElementById("container"));
_shuffle = new TextShuffle(document.getElementById("day"));
document.addEventListener("onclick", newText, false);
function newText(e){
	_index++;
	if(_index >= _demoTexts.length) _index = 0;
	_shuffle.to(_demoTexts[_index], 1.2, Math.floor(Math.random()*3));

}

var random_ab = new Array()

random_ab[0]="absolute.html"
random_ab[1]="absolute_colledge.html"
random_ab[2]="index.html"
//random_ab[3]="absolute_idol.html"
//random_ab[4]="absolute_divination.html"

function linkrandom(){

 window.location=random_ab[Math.floor(Math.random()*random_ab.length)]

}

var background = new Array();
background[0]="https://i.imgur.com/vPz6iyA.jpg"//ㅇ
background[1]="https://i.imgur.com/8aIzq46.jpg"
background[2]="https://i.imgur.com/NLkzIyf.jpg"
background[3]="https://i.imgur.com/7DkDKHT.jpg"
background[4]="https://i.imgur.com/ZyXx8zj.jpg"

//background.push('https://i.imgur.com/zx1WvpZ.jpg');

 function back()
{
	var _backImgNum = Math.floor(Math.random()*5);
	//'url('+background[Math.floor(Math.random()*background.length)]+')';
	var _backImg = document.getElementById("background");
	_backImg.src = background[_backImgNum];
}