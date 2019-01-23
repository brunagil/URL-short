// const que guardar a URL temporariamente: https://www.jsonstore.io/ 
const endPoint = "https://www.jsonstore.io/387a2d29b258fed383609ebf7241f0940a1a9f697f455b3bb9ce4e65c668a48c";

// cria string aleatória que 
// liga a URL encurtada com a URL longa
function createRandomString() {
    let randomString = Math.random().toString(32).substring(2,8)
        return randomString
};

//const do input e do botão

const urlButton = document.getElementById("urlbutton")
const urlInput = document.getElementById("urlinput").value

// pega o valor do input e confere se ele está no formato http
function getInput() {
    let protocolIsOk = urlInput.startsWith("http://") || urlInput.startsWith("https://")
        if (!protocolIsOk) {
            newUrl = `http://${urlInput}`
            return newUrl
        } else {
            return urlInput
        }
}

function addHastAtTheURL() {
        if (window.location.hash == ''){
            window.location.hash = createRandomString();
        }
    }
