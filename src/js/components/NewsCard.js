

export class NewsCard {
    constructor(name, title, date, description, image, source) {
        this.oneCard = this.create(name, title, date, description, image, source)
    }
    get card() {
        return this.oneCard
    }
    create(name, title, date, description, image, source) {
        const card = document.createElement('div');
        card.classList.add('card');
        const cardHtml = `<img class="card__photo" alt="фото новости" src="${image}">
                        <div class="card__text-block">
                            <p class="card__date">${date}</p>
                            <h3 class="card__title">${title}</h3>
                            <p class="card__text">${description}</p>
                            <p class="card__source">${source}</p>
                        </div>`;
        card.insertAdjacentHTML('afterbegin', cardHtml);
        return card;
    }

}