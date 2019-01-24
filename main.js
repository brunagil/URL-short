// const que guardar a URL temporariamente: https://www.jsonstore.io/ 
// const endPoint = "https://www.jsonstore.io/387a2d29b258fed383609ebf7241f0940a1a9f697f455b3bb9ce4e65c668a48c";

// cria string aleatória que 
// liga a URL encurtada com a URL longa
function createRandomString() {
    let randomString = Math.random().toString(32).substring(2,8)
        return randomString
};

//const do input e do botão
const button = document.getElementById("urlbutton")
const input = document.getElementById("urlinput")

button.addEventListener("click", function() {
    console.log("botão funcionou")
    console.log(input.value, "valor do input")
    makeShortUrl()
})

// validação do input: pega o valor do input e confere se ele está no formato http
function getUrlFromInput() {
    let urlinput = input.value
    let protocolIsOk = urlinput.startsWith("http://") || urlinput.startsWith("https://")
        if (!protocolIsOk) {
            newUrl = `https://${urlinput}`
            console.log(newUrl, "newUrl")
            return newUrl
        } else {
            console.log(urlinput, "url input")
            return urlinput
        }
}

function changeHashFromUrl() {
        if (window.location.hash == ''){
            window.location.hash = createRandomString();
            console.log(changeHashFromUrl(), "function change hash")
            console.log(createRandomString(), "a string criada")
        }
    }

// guarda a URL longa e chama as funções para modificar a URL
function makeShortUrl() {
    let longUrl = getUrlFromInput();
        changeHashFromUrl();
        sendRequest(longUrl);
}

//http request para o https://www.jsonstore.io/

function sendRequest () {
    const url = 'https://www.jsonstore.io/387a2d29b258fed383609ebf7241f0940a1a9f697f455b3bb9ce4e65c668a48c'
    
    fetch(url)
        .then(data => {return data.json()})
        .then(res => {console.log(res)})

}



// function sendRequest() { 
//     const url = "https://www.jsonstore.io/4c5314ddfed68a7ce489954a9cf918a7c9a7ed6f47678000ce1d6c3ec0699db8"
//     const data = {
//         'Content-type': 'application/json',
//         'method': "POST",
//         'url': `${endpoint}${'/'}${window.location.hash.substr(1)}`,
//     }
        
//     fetch(endpoint, data)
//         .then(data => {
//             return data.json
//         })
//         .catch(error =>
//             console.log(error))
// }


