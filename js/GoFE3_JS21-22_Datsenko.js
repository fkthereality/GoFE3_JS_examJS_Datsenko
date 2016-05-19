let = ` hello es6`;


/*JSON GET*/
//Это объекты, переведенные в JSON как говорил Никита
$(function(){
var content = $('#temp').html();	
var t = localStorage.getItem('qObj');
t = JSON.parse(t);		
var c = localStorage.getItem('constantObj');
c = JSON.parse(c);		
//console.log(t);
//console.log(c);
var articles = {			
q: t,
c: c
};
var content = contentl(content, articles);
$('body').append(content);	
});
/*END OF JSON GET*/
/*BODY FUNCTIONS*/
$(document).ready(function() {
$('#c').click(function(){				
var sum = extract();
//le.log(sum);
alert(extract());
del();	
});
function extract(){
var allA = 0;
var An = '0';
var strA = '0';
var AnArray;
var strAArray;    	
$('.radio').each(function(i){
var check = $(this).prop("checked");
if(check === true){
An += " " + "1";
} else{
An += " " + "0";
};
});
//console.log(An);
var t = localStorage.getItem('qObj');
t = JSON.parse(t);
//console.log(t);
for(var i=0; i<t.length; i++){
strA += " " +  t[i].trueA;
}
//console.log(strA);
AnArray = An.split(' ');
strAArray = strA.split(' ');
//console.log(AnArray);
//le.log(strAArray);
for(var j=0; j<AnArray.length; j++){
if(AnArray[j] === '1' && AnArray[j] === strAArray[j]  ){
allA += 1;
}
}
//console.log(allA);
return allA;
}
function del(){
$('.radio').each(function(i){
var check = $(this).prop("checked");	    	
if(check === true){
$(this).prop("checked", false);
};
}); 
}
function alert(sum){      			
var defaults = {
overlayColor: 'rgba(0, 0, 0, 0.5)',
overlayFont: 'Arial',
overlayPx: '25px',
overlayLineHeight: '40px',	
overlayPosition: 'fixed',
overlayTop: '0',
overlayLeft: '0',
overlayWidth: '100%',
overlayHeight: '100%',
Position: 'absolute',
Width: '350px',
Height: '180px',
Top:'50%',
Left: '50%',
Margin: '-109px 0 0 -117px',
TextAlign: 'center',
Background: 'white',
PaddingTop: '20px',
Border: '3px solid black',
};		
var $body = $('body');
var $modal;
var $overlay;																		
$modal =$('<div class="alert"><p style="font-size:' + defaults.overlayPx + '; line-height:' + defaults.overlayLineHeight+ '">Результаты тестов</p><p style="font-size:' + ';">Правильных ответов: '+ sum +'</p></div>');
$overlay = $('<div class="overlay"></div>');
$overlay.css({
'background-color': defaults.overlayColor,
'position': defaults.overlayPosition,
'top': defaults.overlayTop,
'left': defaults.overlayLeft,
'width': defaults.overlayWidth,
'height': defaults.overlayHeight,
});		
$modal.css({
'position': defaults.Position,
'width': defaults.Width,
'height': defaults.Height,
'top':defaults.Top,
'left': defaults.Left,
'margin': defaults.Margin,
'text-align': defaults.TextAlign,
'background': defaults.Background,
'padding-top': defaults.PaddingTop,
'border': defaults.Border,
});	
$body.append($overlay);
$body.append($modal);
$overlay.one('click', hideModal);															
function hideModal(){
$modal.remove();
$overlay.remove();				
}		
};
});
/*END OF BODY FUNCTIONS*/
/*ПРОСТО ШАБЛОНИЗАТОР*/
(function(){
var cache = {}; 
this.contentl = function contentl(str, data){
var fn = !/\W/.test(str) ?
cache[str] = cache[str] ||
contentl(document.getElementById(str).innerHTML) :
new Function("obj",
"var p=[],print=function(){p.push.apply(p,arguments);};" +
"with(obj){p.push('" +
str
.replace(/[\r\t\n]/g, " ")
.split("<%").join("\t")
.replace(/((^|%>)[^\t]*)'/g, "$1\r")
.replace(/\t=(.*?)%>/g, "',$1,'")
.split("\t").join("');")
.split("%>").join("p.push('")
.split("\r").join("\\'")
+ "');}return p.join('');");
return data ? fn( data ) : fn;
};
})();
/*END OF ШАБЛОНИЗАТОР*/
/*JSON SET*/
//Это то, что формирует страницу
var qA = [
{ 
q: 'Вопрос №1',
A1: 'Вариант ответ № 1',
A2: 'Вариант ответ № 2',
A3: 'Вариант ответ № 3',
trueA: '1 0 0',
},
{ 
q: 'Вопрос №2',
A1: 'Вариант ответ № 1',
A2: 'Вариант ответ № 2',
A3: 'Вариант ответ № 3',
trueA: '1 0 0',
},
{ 
q: 'Вопрос №3',
A1: 'Вариант ответ № 1',
A2: 'Вариант ответ № 2',
A3: 'Вариант ответ № 3',
trueA: '1 0 0',
},
];
var els = {
H1 : 'Тест по программированию',
C : 'Проверить мои результаты'
};
localStorage.setItem('qObj', JSON.stringify(qA));
localStorage.setItem('constantObj', JSON.stringify(els));
/*END OF JSON SET*/
$(document).ready(function(){
$('li').css({listStyle:'none'}).find('> li').css({listStyle:'none'});
});