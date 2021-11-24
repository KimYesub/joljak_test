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
"하느님은 사랑이십니다", 
"하느님은 고양이이십니다",
"하느님은 수직선이십니다",
"하느님은 기도이십니다",
"하느님은 옆집이십니다",
"하느님은 열역학적이십니다",
"하느님은 고등어자반이십니다",
"하느님은 수학이십니다",
"하느님은 만능이십니다",
"하느님은 하늘나리이십니다",
"하느님은 섭리이십니다",
"하느님은 자본주의이십니다",
"하느님은 탁구이십니다",
"하느님은 71억이십니다",
"하느님은 백일기도이십니다",
"하느님은 가재이십니다",
"하느님은 든든이십니다",
"하느님은 루브르이십니다",
"하느님은 소나무이십니다",
"하느님은 최저온도이십니다",
"하느님은 절대이십니다",
"하느님은 저녁밥이십니다",
"하느님은 하늘소이십니다",
"하느님은 확률이십니다",
"하느님은 하늘눈이십니다",
"하느님은 소중하십니다",
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
random_ab[2]="absolute_money.html"
//random_ab[3]="absolute_idol.html"

function linkrandom(){

 window.location=random_ab[Math.floor(Math.random()*random_ab.length)]

}

var background = new Array();
background[0]="https://i.imgur.com/JMhhhcn.jpg"
background[1]="https://i.imgur.com/eN6eBcL.jpg"
background[2]="https://i.imgur.com/jauTDVs.jpg"
background[3]="https://i.imgur.com/myTV8U5.jpg"
background[4]="https://i.imgur.com/2YhuNlD.jpg"
background[5]="https://i.imgur.com/4p9gPVt.jpg"
background[6]="https://i.imgur.com/BprnKSl.png"
background[7]="https://i.imgur.com/zx3G4Sp.png"
//background.push('https://i.imgur.com/zx1WvpZ.jpg');

 function back()
{
	var _backImgNum = Math.round(Math.random()*8);
	//'url('+background[Math.floor(Math.random()*background.length)]+')';
	var _backImg = document.getElementById("background");
	_backImg.src = background[_backImgNum];
}