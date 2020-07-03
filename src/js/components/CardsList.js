import {PAGE_SIZE} from "../constants/constants";

export class CardsList {
    constructor(container, massive, button) {
        this.container = container;
        this.massive = massive;
        this.button = button;
        this.page = 0;
        this._showOthers();
        this._clearAll();
    }
    _clearAll() {
        while (this.container.lastElementChild) {
            this.container.removeChild(this.container.lastElementChild);
        }
    }
    _addCard(arr) {
        arr.forEach((card) => this.container.appendChild(card));
    }
    _pickThree(page) {
        return this.massive.slice((PAGE_SIZE * page), (PAGE_SIZE * page) + 3);
    }
    _showOthers() {
        this.button.addEventListener("click", () => {
            this._addCard(this._pickThree(this.page +=1));
            this._checkResults();
        });
    }
    render() {
        this._addCard(this._pickThree(this.page));
        this._checkResults();
    }
    _checkResults() {
        if (this.massive.length <= 3 || (PAGE_SIZE * (this.page + 1) > this.massive.length)) {
            this.button.style.display = "none"
        } else {
            this.button.style.display = "flex";
        }
    }
}