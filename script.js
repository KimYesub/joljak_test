var day = [
"하느님은 사랑이십니다", "하느님은 고양이이십니다","하느님은 수직선이십니다","하느님은 기도이십니다","하느님은 옆집이십니다","하느님은 열역학적이십니다","하느님은 수학이십니다","하느님은 섭리이십니다","하느님은 71억이십니다","하느님은 백일기도이십니다","하느님은 든든이십니다","하느님은 루브르이십니다","하느님은 최저온도이십니다",
"하느님은 소중하십니다", "내 사랑한 하느님", "내 소중한 하느님", "내 소중한 전지전능","내 소중한 소원","내 소중한 기도", "내 소중한 71억", "내 소중한 고양이", "내 소중한 하느님", "내 소중한 수직선","내 조각상 수직선","내 소중한 섭리","내 소중한 옆집","내 소중한 수직선", "내 소중한 도둑", "내 소중한 열역학적", "내 소중한 수학","내 소중한 합격운","내 소중한 백일기도","내 소중한 부처님","내 소중한 든든","내 소중한 지갑","내 소중한 루브르","내 소중한 사랑","내 소중한 집주인","내 소중한 최저온도",
"도둑은 최저온도이십니다","열역학은 최저온도이십니다"],
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

random_ab[0]="absolute_cat.html"
random_ab[1]="absolute_colledge.html"
random_ab[2]="absolute_money.html"
//random_ab[3]="absolute_idol.html"

function linkrandom(){

 window.location=random_ab[Math.floor(Math.random()*random_ab.length)]

}

var background = new Array();
background[0]="https://i.imgur.com/hqLcFpC.jpg"//ㅇ
background[1]="https://i.imgur.com/eyTJb70.jpg"//ㅇ
background[2]="https://i.imgur.com/zx1WvpZ.jpg"//ㅇ
background[3]="https://i.imgur.com/brCaCxX.jpg"//ㅇ
background[4]="https://i.imgur.com/VBCTjsD.png"
background[5]="https://i.imgur.com/JZ56IiD.jpg"//ㅇ
background[6]="https://i.imgur.com/pZlQnCZ.png"//ㅇ

//background.push('https://i.imgur.com/zx1WvpZ.jpg');

 function back()
{
	var _backImgNum = Math.floor(Math.random()*7);
	//'url('+background[Math.floor(Math.random()*background.length)]+')';
	var _backImg = document.getElementById("background");
	_backImg.src = background[_backImgNum];
}