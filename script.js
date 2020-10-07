async function buscarSerie() {
    let termo = document.getElementById('termoBusca').value != "" ? document.getElementById('termoBusca').value : "Naruto"
    let url = 'http://api.tvmaze.com/search/shows?q=' + termo
    const response = await fetch(url);
    const json = await response.json();
    let br = document.createElement('br')
    document.getElementById("sectionAPI").innerHTML = '';
    json.forEach((item) => {
        let a = document.createElement('p')
        let b = document.createElement('p')
        let c = document.createElement('p')
        a.className = "sobre"
        b.className = "sobre"
        c.className = "sobre"
        let imagem = document.createElement("img")
        let noImg = document.createElement('img')
        noImg.src = "No_picture_available.png"
        imagem.src = item.show.image != null ? item.show.image.medium : noImg.src
        imagem.style.width = "100px"
        imagem.style.display = "block"
        a.innerText = "Nome: " + item.show.name
        b.innerText = "Linguagem: " + item.show.language
        c.innerText = "Tipo: " + item.show.type
        let div_item = document.createElement('div')
        div_item.className = 'divseries'
        div_item.appendChild(imagem)
        div_item.appendChild(a)
        div_item.appendChild(b)
        div_item.appendChild(c)
        let API = document.getElementById('sectionAPI')
        API.appendChild(div_item)
    })
}

async function buscarAtor() {
    let termo = document.getElementById('termoBuscaAtor').value != "" ? document.getElementById('termoBuscaAtor').value : "Emily"
    let url = 'http://api.tvmaze.com/search/people?q=' + termo
    const response = await fetch(url);
    const json = await response.json();
    document.getElementById("sectionAPI2").innerHTML = '';
    json.forEach((item) => {
        let a = document.createElement('p')
        let b = document.createElement('p')
        let c = document.createElement('p')
        let anonPerson = document.createElement("img")
        anonPerson.src = "No_picture_available.png"
        anonPerson.style.width = "100px"
        anonPerson.style.display = "block"
        a.className = "sobre"
        b.className = "sobre"
        c.className = "sobre"
        let imagem = document.createElement("img")
        imagem.src = item.person.image != null ? item.person.image.medium : anonPerson.src
        imagem.style.width = "100px"
        imagem.style.display = "block"
        let countryName = (item.person.country != null) ? item.person.country.name : "Nenhum país"
        let gender = item.person.gender != null ? item.person.gender : "Não informado."
        a.innerText = "Nome: " + item.person.name
        b.innerText = "País: " + countryName
        c.innerText = "Sexo: " + gender
        let div_item = document.createElement('div')
        div_item.className = 'divseries'
        div_item.appendChild(imagem)
        div_item.appendChild(a)
        div_item.appendChild(b)
        div_item.appendChild(c)
        let API = document.getElementById('sectionAPI2')
        API.appendChild(div_item)



    })
}



document.addEventListener('DOMContentLoaded', () => {
    buscarSerie()
}, false);

document.addEventListener('DOMContentLoaded', () => {
    buscarAtor()
}, false);


