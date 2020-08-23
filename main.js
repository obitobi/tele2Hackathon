const iconsSocial = [{
    link: "./images/ok.svg",
    isCheked: false,
  },
  {
    link: "./images/ok.svg",
    isCheked: false,
  },
  {
    link: "./images/ok.svg",
    isCheked: false,
  },
  {
    link: "./images/ok.svg",
    isCheked: false,
  }
];

const iconsMessenger = [{
    link: "./images/ok.svg",
  },
  {
    link: "./images/ok.svg",
  },
  {
    link: "./images/ok.svg",
  },
  {
    link: "./images/ok.svg",
  },
  {
    link: "./images/ok.svg",
  }
];

const iconsMusic = [{
    link: "./images/ok.svg",
  },
  {
    link: "./images/ok.svg",
  },
  {
    link: "./images/ok.svg",
  }
];

const iconsVideo = [{
    link: "./images/ok.svg",
  },
  {
    link: "./images/ok.svg",
  }
];

const iconsOther = [{
    link: "./images/ok.svg",
  },
  {
    link: "./images/ok.svg",
  },
  {
    link: "./images/ok.svg",
  },
  {
    link: "./images/ok.svg",
  },
  {
    link: "./images/ok.svg",
  }
];

const main = document.querySelector('.main');
const unlimited = main.querySelector('.unlimited');
const unlimitedList = unlimited.querySelector('.unlimited__list');
const unlimitedItem = Array.from(unlimitedList.querySelectorAll('.unlimited__item'));
const unlimitedButtons = unlimited.querySelector('.unlimited__buttons');
const iconTemplate = document.querySelector("#icon").content;
const numbInputs = Array.from(document.querySelectorAll(".popup__input"));
const upArrow = Array.from(document.querySelectorAll(".popup__up-arrow"));
const downArrow = Array.from(document.querySelectorAll(".popup__down-arrow"));



unlimitedItem.forEach((item) => {
  if (item.classList.contains('unlimited__item_active')) {
    showIcons(item);
  }
});

unlimitedItem.forEach((item) => item.addEventListener('click', () => {
  if (!item.classList.contains('unlimited__item_active')) {
    const unlimitedItemActive = unlimitedList.querySelector('.unlimited__item_active');
    item.classList.add('unlimited__item_active');
    unlimitedItemActive.classList.remove('unlimited__item_active');
    // showIcons(item);
  }
  showIcons(item);

}));


function addIcon(item) {
  const icon = iconTemplate.querySelector('.popup__social').cloneNode(true);

  icon.src = item.link;

  if (item.isCheked == true) {
    icon.classList.add("popup__social-colored");
  }

  icon.addEventListener("click", function () {
    if (!icon.classList.contains("popup__social-colored")) {
      icon.classList.add("popup__social-colored");
      item.isCheked = true;
    } else {
      icon.classList.remove("popup__social-colored");
      item.isCheked = false;
    }
    // icon.classList.toggle("popup__social-colored");
  });

  return icon;
}


function showIcons(item) {
  const allUnlimitedButtons = Array.from(unlimitedButtons.querySelectorAll('.popup__social'));
  allUnlimitedButtons.forEach((btn) => {
    btn.remove();
  });

  if (item.classList.contains('unlimited__item-social')) {
    iconsSocial.forEach((item) => {
      // передаем селектор шаблона карточки в класс Card
      unlimitedButtons.append(addIcon(item));
    });
  } else if (item.classList.contains('unlimited__item-messenger')) {
    iconsMessenger.forEach((item) => {
      // передаем селектор шаблона карточки в класс Card
      unlimitedButtons.append(addIcon(item));
    });
  } else if (item.classList.contains('unlimited__item-music')) {
    iconsMusic.forEach((item) => {
      // передаем селектор шаблона карточки в класс Card
      unlimitedButtons.append(addIcon(item));
    });
  } else if (item.classList.contains('unlimited__item-video')) {
    iconsVideo.forEach((item) => {
      // передаем селектор шаблона карточки в класс Card
      unlimitedButtons.append(addIcon(item));
    });
  } else if (item.classList.contains('unlimited__item-other')) {
    iconsOther.forEach((item) => {
      // передаем селектор шаблона карточки в класс Card
      unlimitedButtons.append(addIcon(item));
    });
  }

}

// ОТСЮДА КОПИРУЙ

const minInput = document.querySelector('#minInput');
const gbInput = document.querySelector('#gbInput');
const upArrowMin = document.querySelector('.popup__up-arrow-min');
const downArrowMin = document.querySelector('.popup__down-arrow-min');
const upArrowGb = document.querySelector('.popup__up-arrow-gb');
const downArrowGb = document.querySelector('.popup__down-arrow-gb');
const gbInfBtn = document.querySelector('.popup__infinite-btn-gb');
const minInfBtn = document.querySelector('.popup__infinite-btn-min');
const minInfIcon = document.querySelector('.plan-info__icon-label-min');
const gbInfIcon = document.querySelector('.plan-info__icon-label-gb');


minInfBtn.addEventListener('click', function () {
  minInfBtn.classList.toggle('popup__social-colored');
  if (minInfBtn.classList.contains('popup__social-colored')) {
    minInput.value = '';
    minInput.disabled = true;
    minInfIcon.style.visibility = 'visible';
  } else {
    minInfIcon.style.visibility = 'hidden';
    minInput.disabled = false;
    minInput.value = '100';
  }
});

gbInfBtn.addEventListener('click', function () {
  gbInfBtn.classList.toggle('popup__social-colored');
  if (gbInfBtn.classList.contains('popup__social-colored')) {
    gbInput.value = '';
    gbInput.disabled = true;
    gbInfIcon.style.visibility = 'visible';
  } else {
    gbInput.value = '10';
    gbInput.disabled = false;
    gbInfIcon.style.visibility = 'hidden';
  }
});


upArrowMin.addEventListener('click', function () {
  minInput.value = Number(minInput.value) + 1;
});

downArrowMin.addEventListener('click', function () {
  minInput.value = Number(minInput.value) - 1;
});

upArrowGb.addEventListener('click', function () {
  gbInput.value = Number(gbInput.value) + 1;
});

downArrowGb.addEventListener('click', function () {
  gbInput.value = Number(gbInput.value) - 1;
});

numbInputs.forEach((item) => item.addEventListener('keydown', function () {
  if (this.value.length > 3) {
    this.value = this.value.slice(0, 3);
  }
}))
