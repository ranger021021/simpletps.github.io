let matn = "به زودی متن بدون نقطه را برای علاقه مندان ارائه خواهم کرد این متن در سامانه ثبت اثر هنری و ادبی بارگذاری شده و در حال طی آخرین مراحل خود می باشد علاوه بر آن در مرکز مالکیت معنوی سازمان ثبت اسناد و املاک کشور نیز بارگذاری شده و در حال اکمال می باشد. اين كار من در واقع، يك كار جديدی نيست اما در نوع خود، بی نظير است؛ قبلاً، نوشته های بدون نقطه را در زبان عربی و فارسی داشته ايم؛ ما خطبه بی نقطه امام علی علیه السلام را داريم كه باعث شگفتی همه، هم عوام و هم خواص و اهالی قلم می شود؛ سختی اين كار را بيشتر، كسی لمس می كند كه خود، اين كار را كرده باشد یا بخواهد این کار را بکند. امام علی علیه السلام، آمده اند خطبه ای را ايراد فرموده اند كه از حروف معجمه و منقوط در جملات آن، استفاده نشده است. مشابه اين كار، قبلاً در زمان قاجار هم شده و يك متن بدون نقطه، نوشته شده؛ بعد از آن نيز مشابه اين كارها، جسته گریخته شده كه مهمترين و معروف ترين آنها، نوشته آيت الله حسن زاده آملی بوده. نوشته حاضر، وجه مشخصه اش كه آن را از ساير موارد مشابه، به جز خطبه امام علی علیه السلام، متمايزش می كند، اين است كه در واقع، طولانی ترين متن فارسی بدون نقطه است كه تا به اکنون نوشته شده است در موارد مشابه قبلی، بيشترشان تا  كلمه يا حداكثر  كلمه بوده كه نوشته اينجانب  برابر طولانی تر از موارد مشابه است اين نوشته، به مدت 4 ماه شبانه روزی، به طول انجاميده و وقت برده است. اين نوشته، در 8 صفحه تنظيم شده كه تعداد 5725 كلمه را دربرمی گيرد اين نوشته در واقع یک اثر هنری است در كنار همه آثار هنری ديگر و اين كار، يك رفرنسی برای علاقه مندان معاصر و نيز آيندگان و آنهايی خواهد بود كه می خواهند مشابه چنين نوشته ای را بنویسند. اين كار، در ابتدا سهل به نظر می رسد اما وقتی می خواهی يك جمله بدون نقطه ای را بنويسی، زمان می برد كسی كه اين كار را می كند، بايد اشراف کامل داشته باشد بر لغات فارسی و عربی و گنجينه لغات در ذهنش گسترده باشد امیدوارم از مطالعه این اثر لذت برده باشید";
const textarray = matn.split(' ');
const close = document.getElementById('close');
const  result = document.getElementById('result');
const test = document.getElementById('test');
const starttestbutton = document.getElementById('button');
const text = document.getElementById('text');
const input = document.getElementById('input');
const word = document.getElementById('word');
const score_element = document.getElementById('score');
const timeleft = document.getElementById('timeleft');
const wordpermin = document.getElementById('wpm');
const allwords1 = document.getElementById('allwords');
const acc1 = document.getElementById('acc');
const wpm1 = document.getElementById('wpm1');

const testend = document.getElementById('testended');
const testendbutton = document.getElementById('testendedbtn');
let acc = 0;
let i = 0;
let score = 0;
let j = 60;
let allwords=0;
let timelength = 60;
let counter;
starttestbutton.addEventListener('click', starttest);

function starttest () {
    starttestbutton.classList.add('remove');
    test.classList.remove('remove');
    document.getElementById('inputsec').classList.remove('remove');
    input.value = '';
    text.innerHTML= '';
    input.focus();
    word.innerText = getNextWord();
    settime();
}

input.addEventListener('keyup', (event) => {
    if (event.code == 'Space') {
        if (input.value == ( word.innerText + " ")) {
            spansaz(input.value, 'correct');
            score++;
            score_element.innerText = score;
        } else {
            spansaz(word.innerText, 'incorrect');
        }
        input.value = '';
        word.innerText = getNextWord();
    }
    if (event.code == 'Enter') {
        if (input.value == word.innerText ) {
            spansaz(input.value, 'correct');
            score++;
            score_element.innerText = score;
        } else {
            spansaz(word.innerText, 'incorrect');
        }
        input.value = '';
        word.innerText = getNextWord();
    }
})

function getNextWord () {
    i++;
    return textarray[(i - 1)];
}

function spansaz (typed_text, classadd) { 
    text.innerHTML += `<span class="${classadd}">${typed_text}</span> `;
    allwords++;
}

function settime () {
    counter= setInterval(timer, 1000);
}

function timer () {
    j--;
    timeleft.innerText = "0:" + j;
    wordpermin.innerText = Math.floor(score / ((timelength - j) / 60));
    if (j < 10) {
        timeleft.innerText = "0:0" + j;    }
    if (j == 0) {
        testended();
    }
}

function testended () {
    document.getElementById('inputsec').classList.add('remove');
    testend.classList.remove('remove');
    clearInterval(counter);
    result.classList.remove('remove');
    allwords1.textContent = "تمام کلمات : "+ allwords;
    if( ! isNaN(score / allwords)){
        acc1.textContent = "دقت کلمات صحیح : " + (((score / allwords).toFixed(2))*100) + '%';
    }else{
        acc1.textContent = "دقت کلمات صحیح : " + 0;

    }
    wpm1.textContent = "سرعت نوشتن کلمات  : " +  Math.round(score / 5) +" کلمه بر دقیقه";
}

testendbutton.addEventListener('click', () => {
    starttestbutton.classList.remove('remove');
    test.classList.add('remove');
    testendbutton.classList.add('remove');
    document.getElementById('h2').classList.add('remove');

     acc = 0;
     i = 0;
     score = 0;
     j =60;
     allwords=0;
     timelength = 60;
})
close.addEventListener('click', () => {
    result.classList.add('remove');
})