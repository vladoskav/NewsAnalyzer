export class SearchInput {
    constructor(callback, form, loader, notFound, results) {
        this.callback = callback;
        this.loader = loader;
        this.form = form;
        this.notFound = notFound;
        this.results = results;
    }
    validate(text) {
        return text.length
    }
    submit() {
        const input = this.form.querySelector('.search-field__input');
        const error = this.form.querySelector('.search-field__error');

        if (this.validate(input.value)) {
            this.loader.style.display = "flex";

          return this.callback(input.value)
                .then((result)=> {
                    if (result.totalResults === 0) {
                        this.notFound.style.display = "flex"
                    } else {
                        this.results.style.display = "flex";
                        this.notFound.style.display = "none"
                    }
                    localStorage.setItem("query", `${input.value}`);

                    return result;
                })
                .finally(() => {
                    this.loader.style.display = "none";
                });

        } else {
            error.style.display = "block";
        }


    }
}