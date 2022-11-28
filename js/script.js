'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Hi wy world",
        "123456"
    ]
};
const adv = document.querySelectorAll(".promo__adv img"),
      poster = document.querySelector(".promo__bg"),
      genre = poster.querySelector(".promo__genre"),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach (item => {
        item.remove();
});
genre.textContent = "DRAMAe";
poster.style.backgroundImage = "url('img/bg.jpg')";
movieList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item"> ${i + 1} ${film}
     <div class="delete"> </div>
</li>

    `;
});
console.log(1555);