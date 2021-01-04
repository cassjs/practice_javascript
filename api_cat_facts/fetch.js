async function getFact() {
    //Source: Cat Facts - https://public-apis.io/cat-facts-api
    const api_url ='https://cat-fact.herokuapp.com/facts/random';
    const response = await fetch(api_url);
    const data = await response.json();
    const { text } = data;

    document.getElementById('catFact').textContent = text;

    btn.addEventListener("click", getFact)

    data.innerHTML = catFact;
};

getFact();