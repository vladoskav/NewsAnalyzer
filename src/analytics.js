import './pages/analytics.css';

import {request} from "./js/constants/constants";
import {newsPerWeek} from "./js/constants/constants";
import {queryPerTitles} from "./js/constants/constants";
import {Statistics} from "./js/components/Statistics";
import {currentMonth} from "./js/constants/constants";
import {week} from "./js/constants/constants";
import {dayNumber} from "./js/constants/constants";

request.textContent = `Вы спросили: «${localStorage.getItem('query')}»`;

newsPerWeek.textContent = `${JSON.parse(localStorage.getItem('data')).totalResults}`;


const countWords = () => {

    const titles = JSON.parse(localStorage.getItem('data')).articles.map((card) => card.title);

    return titles.toString().split(`${localStorage.getItem('query')}`).length;
};
queryPerTitles.textContent = `${countWords()}`;

const statisctics = new Statistics(JSON.parse(localStorage.getItem('data')).articles);
statisctics.dayCounts();
statisctics.weekDay();
currentMonth.textContent = `дата (${new Date(JSON.parse(localStorage.getItem('data')).articles[0].publishedAt).toLocaleDateString('ru-Latn', {month: 'long'})})`;

week.forEach((day, i ) => {
    day.textContent = statisctics.weekDays[i]
});

dayNumber.forEach((day, i) => {
    day.textContent = statisctics.numbers[i];
    day.style.width = `${statisctics.numbers[i]}%`
});