export class Statistics {
    constructor(data) {
        this.data = data;
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
    _occurrence(string, substring) {
        let counter = 0;
        let sub = substring.toLowerCase();
        let str = string.toLowerCase();
        let arr = [];
        let index = -1;

        do {
            index = str.indexOf(sub, index + 1);
            if (index !== -1) {
                arr[counter++] = index;
                let i = index;
            }
        } while (index !== -1);

        return counter;
    }
    weekDay() {
        this.data.forEach((card) => {
            this.days[new Date(card.publishedAt).getDay()] = new Date(card.publishedAt).toLocaleDateString('ru-Latn', {day: "numeric", weekday: "short"});

        })

    }
    dayCounts() {
        this.data.forEach((card) => {

            const title = this._occurrence(card.title, `${localStorage.getItem('query')}`);
            const description =  this._occurrence(card.description, `${localStorage.getItem('query')}`);
            const dayCounter = title + description;
            this.counter[new Date(card.publishedAt).getDay()] += dayCounter;

        })
    }
}
