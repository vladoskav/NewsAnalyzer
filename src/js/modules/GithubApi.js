export class GithubApi {
    constructor(url) {
        this.url = url
    }
    getCommits() {
        return fetch(`${this.url}`, {
            method: 'GET'
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            })
    }
}