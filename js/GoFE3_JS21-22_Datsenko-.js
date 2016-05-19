let any = "Hellow";
let target = `${any} для проверки работоспособности тестов, наберите в вашей npm-консоли команду jasmine и если у вас (выделяю большими буквами) GULP то покажет зеленую точку. ВНИМАНИЕ именно ГУЛЬП, а не grunt }`;
console.log (target);




var qA = {
    'qu1': {
        q: 'Вопрос №1',
        A1: 'Вариант ответ № 1',
        A2: 'Вариант ответ № 2',
        A3: 'Вариант ответ № 3',
        trueA: '1 0 0',
    },
    'qu2': {
        q: 'Вопрос №2',
        A1: 'Вариант ответ № 1',
        A2: 'Вариант ответ № 2',
        A3: 'Вариант ответ № 3',
        trueA: '1 0 0',
    },
    'qu3': {
        q: 'Вопрос №3',
        A1: 'Вариант ответ № 1',
        A2: 'Вариант ответ № 2',
        A3: 'Вариант ответ № 3',
        trueA: '1 0 0',
    },
};

let {qu1: {q: q1}} = qA;
let {qu1: {A1: a1}} = qA;
let {qu1: {A2: a2}} = qA;
let {qu1: {A3: a3}} = qA;
let {qu2: {q: q2}} = qA;
let {qu3: {q: q3}} = qA;







//console.log(q1);





let html = `



    Тест по программированию
<li id="q0" style="list-style: none;">${ q1};<br>
<form>
<input type="radio" class="radio" name="r1" id="r1">${ a1}<br>
<input type="radio" class="radio" name="r1" id="r2>">${ a2}<br>
<input type="radio" class="radio" name="r1" id="r3">${ a3}<br>
</form>
</li>
<li id="q1" style="list-style: none;">${ q2}<br>
<form>
<input type="radio" class="radio" name="r1" id="r1">${ a1}<br>
<input type="radio" class="radio" name="r1" id="r2>">${ a2}<br>
<input type="radio" class="radio" name="r1" id="r3">${ a3}<br>
</form>   </li><li id="q2" style="list-style: none;">${ q3}<br>
<form>
<input type="radio" class="radio" name="r1" id="r1">${ a1}<br>
<input type="radio" class="radio" name="r1" id="r2>">${ a2}<br>
<input type="radio" class="radio" name="r1" id="r3">${ a3}<br>
</form>
<input type="submit" id="c" value="Проверить мои результаты">
    </li>


`;
document.getElementById('insert').insertAdjacentHTML('beforeBegin' , html);





