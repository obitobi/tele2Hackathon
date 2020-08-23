const questions = [
  'Привет! Давай помогу быстро настроить твой тариф? Всего три вопроса.',
  'Как много пользуешься интернетом?',
  'А что на счет количества звонков?',
  'И последний вопрос, много соц. сетей используешь?',
  'Отлично, твой тариф готов, можешь донастроить его или купить прямо сейчас!'
]

const socialsBtn = document.querySelectorAll('.popup__social');
const infBtn = document.querySelectorAll('.popup__infinite-btn');
const answBtn = document.querySelectorAll('.popup__answer-button');
const linkToMain = document.querySelector('.main-pageLink');

const fBtn = document.querySelector('#first');
const sBtn = document.querySelector('#second');
const tBtn = document.querySelector('#third');
const forthBtn = document.querySelector('#forth');

const qaTemplate = document.querySelector('#dialog__element').content;
const qaList = document.querySelector('.popup__dialog');

const priceValue = document.querySelector('.popup__price-value');
const gbInput = document.querySelector('#gbInput');
const minInput = document.querySelector('#minInput');

let i = 0

function clickCounter() {
  i += 1;
  console.log(i);
  return i;
}

function changePrice(evt) {
  let p = priceValue.textContent;

  if (i === 2) {
    switch (evt.target.textContent) {
      case 'Много':
        priceValue.textContent = (parseInt(p) + 120).toString();
        gbInput.value = 20;
        break;
      case "Средне":
        priceValue.textContent = (parseInt(p) + 90).toString();
        gbInput.value = 10;
        break;
      case "Мало":
        priceValue.textContent = (parseInt(p) + 60).toString();
        gbInput.value = 3;
        break;
    }
  }

  if (i === 3) {
    switch (evt.target.textContent) {
      case 'Много':
        priceValue.textContent = (parseInt(p) + 120).toString();
        minInput.value = 600;
        break;
      case "Средне":
        priceValue.textContent = (parseInt(p) + 90).toString();
        minInput.value = 400;
        break;
      case "Мало":
        priceValue.textContent = (parseInt(p) + 60).toString();
        minInput.value = 200;
        break;
    }
  }

  if (i === 4) {
    switch (evt.target.textContent) {
      case 'Много':
        priceValue.textContent = (parseInt(p) + 120).toString();
        for (let j = 0; j < 10; j++) {
          socialsBtn[j].classList.add('popup__social-colored');
        }
        break;
      case "Средне":
        priceValue.textContent = (parseInt(p) + 90).toString();
        for (let j = 0; j < 6; j++) {
          socialsBtn[j].classList.add('popup__social-colored');
        }
        break;
      case "Мало":
        priceValue.textContent = (parseInt(p) + 60).toString();
        for (let j = 0; j < 3; j++) {
          socialsBtn[j].classList.add('popup__social-colored');
        }
        break;
    }
  }
}


socialsBtn.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup__social-colored')) {
      priceValue.textContent = (parseInt(priceValue.textContent) - 20).toString();
      evt.target.classList.toggle('popup__social-colored');
    } else {
      priceValue.textContent = (parseInt(priceValue.textContent) + 20).toString();
      evt.target.classList.toggle('popup__social-colored');
    }

  })
});

infBtn.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    evt.target.classList.toggle('popup__inf-colored');
  })
});

answBtn.forEach(function (item) {
  item.addEventListener('click', function (evt) {
    clickCounter();
    changePrice(evt);
    showQAPair(evt, evt.target.textContent, questions[i]);
  });
});

function createNewDialogPair(answText, qText) {
  const qaEl = qaTemplate.cloneNode(true);
  qaEl.querySelector('#answ').querySelector('.dialog__text').textContent = answText;
  qaEl.querySelector('#question').querySelector('.dialog__text').textContent = qText;
  return qaEl;
}


function renderCard(qaEl) {
  qaList.append(qaEl);
}

function initPage() {
  tBtn.classList.add('invisible');
  forthBtn.classList.add('invisible');
  fBtn.textContent = 'Привет, давай';
  sBtn.textContent = 'Нет, спасибо';
}

function showQAPair(evt, answText, qText) {
  console.log(evt.target.textContent);
  if (evt.target.textContent === 'Хочу донастроить' ||
      evt.target.textContent === 'Нет, спасибо' ||
      evt.target.textContent === 'Давай закончим') {
    linkToMain.click();
  }


  if (i === 5) {
    sBtn.addEventListener('click', linkToMain.click());
    return;
  }

  renderCard(createNewDialogPair(answText, qText));
  tBtn.classList.remove('invisible');
  forthBtn.classList.remove('invisible');
  fBtn.textContent = 'Много';
  sBtn.textContent = 'Средне';

  if (i === 4) {
    sBtn.classList.add('invisible');
    forthBtn.classList.add('invisible');
    fBtn.textContent = 'Беру!';
    tBtn.textContent = 'Хочу донастроить';
  }
}

initPage();
