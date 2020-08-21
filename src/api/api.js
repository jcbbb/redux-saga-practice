const Api = (() => {
    const fetchRates = async () => {
        const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    };

    return { fetchRates };
})();

export default Api;
