export class CommitCardList {
    constructor(massive, container) {
        this.massive = massive;
        this.container = container;
    }
    _addCard(card) {
        card.forEach((item) => this.container.append(item));
    }
    render() {
        this._addCard(this.massive.slice(0, 21));
    }
}