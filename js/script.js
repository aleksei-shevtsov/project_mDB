/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const bgOfMarsianin = document.querySelector(".promo__bg").style.background = "url(../img/bg.jpg)";
console.log(bgOfMarsianin);


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const listOfFilms = document.querySelector(".promo__interactive-list");
let filmName;
movieDB.movies.sort().forEach(element => {
    const li = document.createElement("li");
    let text = document.createTextNode(element);
    li.appendChild(text);
    li.classList.add("promo__interactive-item");
    listOfFilms.appendChild(li);
});


