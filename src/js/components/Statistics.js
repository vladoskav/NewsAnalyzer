export class Statistics {
    constructor(data, func) {
        this.data = data;
        this.func = func;
        this.counter = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            0: 0
        };
        this.days = {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0
        }
    }
    get weekDays() {
        return this.days;
    }
    get numbers() {
        return this.counter
    }
    weekDay() {
        this.data.forEach((card) => {
            this.days[new Date(card.publishedAt).getDay()] = new Date(card.publishedAt).toLocaleDateString('ru-Latn', {day: "numeric", weekday: "short"});

        })

    }
    dayCounts() {
        this.data.forEach((card) => {

            const title = this.func(card.title, `${localStorage.getItem('query')}`);
            const description =  this.func(card.description, `${localStorage.getItem('query')}`);
            const dayCounter = title + description;
            this.counter[new Date(card.publishedAt).getDay()] += dayCounter;

        })
    }
}
