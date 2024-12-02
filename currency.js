class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_RMrPucYR7a9nI9EAo2bGcnwUJpkJCnX4syUjlGs8&base_currency=";//kok url adresimi tanimladim

    }

    async exchange(amount , firstCurrency , secondCurrency){
        const response = await fetch(`${this.url}${firstCurrency}`);
        console.log(response);
    }
}