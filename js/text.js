const congratulations = {
  "parents": { //?name=parents
    "name": "Мама и Папа",
    "text1": "Дорогие мои родители, люблю Вас очень!",
    "text2": "Крепкого здоровья и хорошего настроения.",
    "text3": "С Новым Годом!"
  },
  "brother": { //?name=brother
    "name": "Влад и Марина",
    "text1": "Родные мои путешественники)",
    "text2": "Финансовой стабильности и новых стран.",
    "text3": "С Новым Годом!"
  },
  "nephews": { //?name=nephews
    "name": "Тема и Даня",
    "text1": "Любимые мои племянники!",
    "text2": "Успехов во всех начинаниях.",
    "text3": "С Новым Годом!"
  },
  "cousin": { //?name=cousin
    "name": "Дима, Даша и Свят",
    "text1": "Привет, «родичи»)",
    "text2": "Ярких эмоций и счастья без меры.",
    "text3": "С Новым Годом!"
  },
  "godmother": { //?name=godmother
    "name": "Руслан и Юля",
    "text1": "Мои самые близкие и родные.",
    "text2": "Спасибо за то, что Вы у меня есть)",
    "text3": "С Новым Годом!"
  },
  "goddaughter": { //?name=goddaughter
    "name": "Дашенька",
    "text1": "Моя любимая крестница!",
    "text2": "Будь такой же яркой и красивой.",
    "text3": "С Новым Годом!"
  },
  "godfather": { //?name=godfather
    "name": "Эдик и Ира",
    "text1": "Дорогие мои кумовья)",
    "text2": "Семейного счастья и любви до «безтями»",
    "text3": "С Новым Годом!"
  }, 
  "friends": { //?name=friends
    "name": "Саша, Катя и Женя",
    "text1": "Самая классная семья)",
    "text2": "Здоровья, счастья и радости в доме.",
    "text3": "С Новым Годом!"
  },
  "dasha": { //?name=dasha
    "name": "Даша",
    "text1": "«Воронько» ты моя «Воронько»",
    "text2": "Пусть глаза твои счастьем сияют всегда)",
    "text3": "С Новым Годом!"
  },
  "vova": { //?name=vova
    "name": "Вова",
    "text1": "Надежный друг и шкипер)",
    "text2": "Попутного ветра и семь футов под килем, по жизни",
    "text3": "С Новым Годом!"
  },
  "natali": { //?name=natali
    "name": "Натали",
    "text1": "Конечно, для тебя это не будет сюрпризом.",
    "text2": "Но очень хочу, что бы ты улыбнулась)",
    "text3": "С Новым Годом!"
  },
  "daughter": { //?name=daughter
    "name": "Лизочка",
    "text1": "Любимая моя доченька.",
    "text2": "Люблю тебя очень. Будь счастлива.",
    "text3": "С Новым Годом!"
  },
  "jenya": { //?name=jenya
    "name": "Женя",
    "text1": "Дружище, хоть ты сейчас далеко(",
    "text2": "Крепко обнимаю, пусть у тебя все получится!",
    "text3": "С Новым Годом!"
  },
  "sasha": { //?name=sasha
    "name": "Саша, Тома и Варя",
    "text1": "Любви, здоровья, доброты.",
    "text2": "И замечательных подарков!.",
    "text3": "С Новым Годом!"
  }
};
const myurl_string = window.location.href;
const myurl = new URL(myurl_string);
const nameurl = myurl.searchParams.get('name');
const names = document.getElementById('names');
const firstRow = document.getElementById('row_1');
const secondRow = document.getElementById('row_2');
const thirtRow = document.getElementById('row_3');
let arr = [];
let newArr = [];
names.innerText = nameurl;

function addTags() {
  arr.forEach(function(el) {
    newArr.push('<span>');
    newArr.push(el);
    newArr.push('</span>');  
  });
}
function addText(par) {
  names.innerText = par.name;
  arr = par.text1.split(" ");
  newArr = [];
  addTags();
  firstRow.innerHTML = newArr.join('');
  arr = par.text2.split(" ");
  newArr = [];
  addTags();
  secondRow.innerHTML = newArr.join('');
  arr = par.text3.split(" ");
  newArr = [];
  addTags();
  thirtRow.innerHTML = newArr.join('');
}

switch (nameurl) {
  case 'parents':
    addText(congratulations.parents);
    break;
  case 'brother':
    addText(congratulations.brother);
    break;
  case 'nephews':
    addText(congratulations.nephews);
    break;
  case 'cousin':
    addText(congratulations.cousin);
    break;
  case 'godmother':
    addText(congratulations.godmother);
    break;
    case 'goddaughter':
    addText(congratulations.goddaughter);
    break;
  case 'godfather':
    addText(congratulations.godfather);
    break;
  case 'friends':
    addText(congratulations.friends);
    break;
  case 'dasha':
    addText(congratulations.dasha);
    break;
  case 'vova':
    addText(congratulations.vova);
    break;
  case 'natali':
    addText(congratulations.natali);
    break;
  case 'daughter':
    addText(congratulations.daughter);
    break;
  case 'jenya':
    addText(congratulations.jenya);
    break;
  case 'sasha':
    addText(congratulations.sasha);
    break;

}