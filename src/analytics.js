import './pages/analytics.css';

import {request} from "./js/constants/constants";
import {newsPerWeek} from "./js/constants/constants";
import {queryPerTitles} from "./js/constants/constants";
import {Statistics} from "./js/components/Statistics";

request.textContent = `Вы спросили: «${localStorage.getItem('query')}»`;

newsPerWeek.textContent = `${JSON.parse(localStorage.getItem('data')).totalResults}`;


export const countWords = () => {

    const titles = JSON.parse(localStorage.getItem('data')).articles.map((card) => card.title);

    return titles.toString().split(`${localStorage.getItem('query')}`).length;
};
queryPerTitles.textContent = `${countWords()}`;

const statisctics = new Statistics(JSON.parse(localStorage.getItem('data')).articles);
statisctics.dayCounts();