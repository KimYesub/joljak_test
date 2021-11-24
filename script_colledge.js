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
"고양이라는 이름만으로도 자랑스럽다.",
"하느님라는 이름만으로도 자랑스럽다.",
"시험라는 이름만으로도 자랑스럽다.",
"호랑나비라는 이름만으로도 자랑스럽다.",
"죽부인라는 이름만으로도 자랑스럽다.",
"야구라는 이름만으로도 자랑스럽다.",
"연어라는 이름만으로도 자랑스럽다.",
"야식라는 이름만으로도 자랑스럽다.",
"부귀영화라는 이름만으로도 자랑스럽다.",
"손가락라는 이름만으로도 자랑스럽다.",
"휴가라는 이름만으로도 자랑스럽다.",
"루브르라는 이름만으로도 자랑스럽다.",
"확률라는 이름만으로도 자랑스럽다.",
"칠면조라는 이름만으로도 자랑스럽다.",
"백일기도라는 이름만으로도 자랑스럽다.",
"집주인라는 이름만으로도 자랑스럽다.",
"하늘소라는 이름만으로도 자랑스럽다.",
"생각라는 이름만으로도 자랑스럽다.",
"만성피로라는 이름만으로도 자랑스럽다.",
"경찰서라는 이름만으로도 자랑스럽다.",
"기와라는 이름만으로도 자랑스럽다.",
/*"대학은 하느님으로 갈 수 있다",

"대학은 확률으로 갈 수 있다",
"대학은 시험으로 갈 수 있다",
"대학은 마술으로 갈 수 있다",
"대학은 참나리으로 갈 수 있다",
"대학은 송골매으로 갈 수 있다",
"대학은 가재으로 갈 수 있다",
"대학은 집주인으로 갈 수 있다",
"대학은 루브르으로 갈 수 있다",
"대학은 임금으로 갈 수 있다",
"대학은 감옥으로 갈 수 있다",
"대학은 옆집으로 갈 수 있다",
"대학은 수직선으로 갈 수 있다",
"대학은 고양이으로 갈 수 있다",
"대학은 열역학적으로 갈 수 있다",
"대학은 만능으로 갈 수 있다",
"대학은 축구으로 갈 수 있다",
"대학은 맥주으로 갈 수 있다",
"대학은 창조주으로 갈 수 있다",
"대학은 든든으로 갈 수 있다",
"대학은 참치으로 갈 수 있다",
"대학은 백일기도으로 갈 수 있다",
"대학은 소나무으로 갈 수 있다",
"대학은 아침밥으로 갈 수 있다",
"대학은 마술으로 갈 수 있다",*/
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

random_ab[0]="index.html"
random_ab[1]="absolute_colledge.html"
random_ab[2]="absolute_money.html"
//random_ab[3]="absolute_idol.html"
//random_ab[4]="absolute_divination.html"

function linkrandom(){

 window.location=random_ab[Math.floor(Math.random()*random_ab.length)]

}

var background = new Array();
background[0]="https://i.imgur.com/mZTCA05.png"
background[1]="https://i.imgur.com/UP3Gh4F.jpg"
background[2]="https://i.imgur.com/DthdNBB.jpg"
background[3]="https://i.imgur.com/Kv0Qdpx.png"
//background[4]="https://i.imgur.com/b6LVxPL.jpg"
//background.push('https://i.imgur.com/zx1WvpZ.jpg');

 function back()
{
	var _backImgNum = Math.floor(Math.random()*4);
	//'url('+background[Math.floor(Math.random()*background.length)]+')';
	var _backImg = document.getElementById("background");
	_backImg.src = background[_backImgNum];
}