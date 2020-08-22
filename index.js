const questions = [
  {
    topic: 'Первое сообщение',
    content: 'Hei!'
  },
  {
    topic: 'Gb',
    content: 'Hei!'
  },
  {
    topic: 'Mins',
    content: 'Hei!'
  },
  {
    topic: 'Social',
    content: 'Hei!'
  },
]

const fBtn = document.querySelector('#first');
const sBtn = document.querySelector('#second');
const tBtn = document.querySelector('#third');
const forthBtn = document.querySelector('#forth');
const firstAnsw = document.querySelector('#firstAnsw');

const qaTemplate = document.querySelector('#dialog__element').content;
const qaList = document.querySelector('.popup__dialog');

function createNewDialogPair(text) {
  const qaEl = qaTemplate.cloneNode(true);
  qaEl.querySelector('#answ').classList.add('invisible');
  qaEl.querySelector('#question').textContent = text;
  return qaEl;
}

function renderCard(qaEl) {
  qaList.append(qaEl);
}

function initPage() {
  tBtn.classList.add('invisible');
  fBtn.addEventListener('click', showHelloAnsw);
  forthBtn.classList.add('invisible');
  fBtn.textContent = 'Hello!';
  sBtn.textContent = 'Goodbye!';
  firstAnsw.classList.add('invisible');
}

function showHelloAnsw() {
  firstAnsw.classList.remove('invisible');
  tBtn.classList.remove('invisible');
  forthBtn.classList.remove('invisible');
  fBtn.textContent = 'Много';
  sBtn.textContent = 'Средне';
  tBtn.addEventListener('click', function () {
    renderCard(createNewDialogPair('Hello, Drone, kak dela? Skok Gb?'));
  });
}

initPage();
