const API = "https://api.shrtco.de/v2/shorten?url=";


async function  getShortURL(url) {
   return await fetch(API + url)
    .then((response) => response.json())
    .then((data) => {
        let {short_link} = data.result
        return short_link
    });
    
}   




const button = document.getElementById('generateURL')

button.addEventListener('click', (event) =>{
    const content = document.getElementById('url_result')

    let urlFull = document.getElementById('url')
    let urlCorto = getShortURL(urlFull.value);
    urlCorto.then((response) =>{
        let node = document.createElement('div')
        let itemUrlComplete = document.createElement('div')
        let itemUrlShort = document.createElement('div')

        node.classList.add('search__result-item')
        itemUrlComplete.classList.add('search__result-item__pagelink')
        itemUrlShort.classList.add('search__result-item__shortenlink')

        let contentitemUrlComplete = document.createTextNode(urlFull.value)
        let contentitemUrlShort = document.createTextNode(response)

        itemUrlComplete.appendChild(contentitemUrlComplete)
        itemUrlShort.appendChild(contentitemUrlShort)

        node.appendChild(itemUrlComplete)
        node.appendChild(itemUrlShort)

        content.appendChild(node)
    })

})