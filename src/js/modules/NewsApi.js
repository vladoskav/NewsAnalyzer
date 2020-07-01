export class NewsApi {
    constructor(apiKey) {
        this.apiKey = apiKey
    }

    getNews(query) {
        const date = new Date().toISOString();
        let fromDate = new Date();
        fromDate.setDate(fromDate.getDate() - 7);
        fromDate = fromDate.toISOString();

        return fetch(`https://newsapi.org/v2/everything?q=${query}&from=${date}$to=${fromDate}&pageSize=100&apiKey=${this.apiKey}`, {
            method: 'GET'
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
    }
}