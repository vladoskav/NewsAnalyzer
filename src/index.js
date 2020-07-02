import './pages/main.css';
import {NewsApi} from "./js/modules/NewsApi";
import {ApiKey} from "./js/constants/constants";
import {SearchInput} from "./js/components/SearchInput";
import {form} from "./js/constants/constants";
import {loaderBlock} from "./js/constants/constants";
import {notFound} from "./js/constants/constants";
import {CardsList} from "./js/components/CardsList";
import {NewsCard} from "./js/components/NewsCard";
import {cardsContainer} from "./js/constants/constants";
import {results} from "./js/constants/constants";
import {utils} from "./js/utils/utils";
import {showButton} from "./js/constants/constants";

const newsApi = new NewsApi(ApiKey);

const searchInput = new SearchInput((q) => newsApi.getNews(q),
    form, loaderBlock, notFound, results);

const sendForm = (event) => {
    event.preventDefault();
    localStorage.clear();
    searchInput.submit()
        .then((res) => {
            const cards = res.articles.map((card) =>
                new NewsCard(card.source.name, card.title,
                    utils(card.publishedAt), card.description,
                    card.urlToImage, card.source.name
                ).card);
            localStorage.setItem('data', JSON.stringify(res));
            const cardsList = new CardsList(cardsContainer, cards, showButton);
            cardsList.render();
        })
        .catch(
            err => {
                notFound.style.display = "flex";
                notFound.querySelector('h2').textContent = "Упс... произошла ошибка:"+" "+ err;
            });
};

form.addEventListener("submit", sendForm);



