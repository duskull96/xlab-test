export class Api {
    url =
        "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
    token = "66bc6fbaa4dc76af38d3a931a9e2a7e664e3b6b3";

    getAddress(query: string, count?: number) {
        let options: any = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Token " + this.token,
            },
            body: JSON.stringify({ query: query, count: count ? count : 10 }),
        };

        return fetch(this.url, options);
    }
}
