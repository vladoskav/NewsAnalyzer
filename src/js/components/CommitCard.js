export class CommitCard {
    constructor(name, email, date, message, avatar, url) {
        this.oneCard = this.create(name, email, date, message, avatar, url);
    }
    get card() {
        return this.oneCard
    }
    create(name, email, date, message, avatar, url) {
        const card = document.createElement('a');
        const normalDate = new Date(date).toLocaleDateString('ru-Latn', {
            month: 'long',
            year: 'numeric',
            day: 'numeric',
        });
        card.href = `${url}`;
        card.classList.add('carousel__cell');
        card.classList.add('history__swiper-slide');
        const cardHtml = `<p class="history__date">${normalDate}</p>
                <div class="history__upper-block">
                    <div class="photo-wrapper_mini">
                        <img class="history__photo" src="${avatar}" alt="author">
                    </div>
                    <div class="history__info-block">
                        <h3 class="history__name">${name}</h3>
                        <p class="history__email">${email}</p>
                    </div>
                </div>
                <p class="history__commit">
                    ${message}
                </p>`;
        card.insertAdjacentHTML('afterbegin', cardHtml);
        return card;
    }
}