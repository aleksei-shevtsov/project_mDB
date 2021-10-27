/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const adv = document.querySelectorAll(".promo__adv img");
const genre = document.querySelector(".promo__genre");
const poster = document.querySelector(".promo__bg");
const listOfFilms = document.querySelector(".promo__interactive-list");
const addForm = document.querySelector("form.add");
const addInput = addForm.querySelector(".adding__input");
const checkbox = addForm.querySelector("[type='checkbox']");

addForm.addEventListener('submit', (event) => {

    event.preventDefault();

    let newFilm = addInput.value;
    let favourite = checkbox.checked;

    if (newFilm) {

        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...` //обрезаем строку до 21 символа, добавляем "..."
        }

        if (favourite) {
            console.log('Добавляем любимый фильм');
        }
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
        createMovieList(movieDB.movies, listOfFilms);
    }
    event.target.reset(); //очистить input
});

const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
}

const makeChanges = () => {
    genre.textContent = "ДРАМА";
    poster.style.backgroundImage = "url('img/bg.jpg')";
}

const sortArr = (arr) => {
    arr.sort();
}

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

function createMovieList(films, parent) {
    parent.innerHTML = '';
    sortArr(films);
    films.forEach((element, index) => {
        parent.innerHTML += `
        <li class="promo__interactive-item">${++index}. ${element}
            <div class="delete"></div>
        </li>
        `;
    });
    document.querySelectorAll(".delete").forEach((btn, index)=>{
        btn.addEventListener('click', ()=>{
            btn.parentElement.remove();
            movieDB.movies.splice(index, 1);
            createMovieList(films, parent);
        });
    });
}

deleteAdv(adv);
makeChanges();
createMovieList(movieDB.movies, listOfFilms);
