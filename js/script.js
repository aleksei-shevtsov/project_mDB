/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const adv = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre');
const poster = document.querySelector(".promo__bg");
const listOfFilms = document.querySelector(".promo__interactive-list");

adv.forEach(item => {
    item.remove();
});

listOfFilms.innerHTML = "";

genre.textContent = "ДРАМА";

poster.style.backgroundImage = "url('img/bg.jpg')";

console.log(poster.innerHTML)

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let filmName;
let count;

movieDB.movies.sort().forEach((element, index) => {

    listOfFilms.innerHTML += `
    <li class="promo__interactive-item">${++index}. ${element}
        <div class="delete"></div>
    </li>
    `

    // const li = document.createElement("li");
    // let text = document.createTextNode(element);
    // li.appendChild(text);
    // li.classList.add("promo__interactive-item");
    // console.log(li.prepend(count));
    // listOfFilms.appendChild(li);
});


