// Тестовые данные(заглушка, моковые данные, стабы) - Ответ от сервиса фильмов
// films.ru/api/v1.0/films
films = [
    film1 = {
        name: 'Человек паук',
        start: '10:00',
        ganar: [0, 1, 6],
        hire: true, //прокат
        price: 340,
        new: false, //новинки
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    },
    film2 = {
        name: 'Собачья жизнь',
        start: '12:00',
        ganar: [2, 3, 4],
        hire: false,
        price: 360,
        new: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    },
    film3 = {
        name: 'История игрушек 4',
        start: '14:00',
        ganar: [2, 4, 5],
        hire: false,
        price: 250,
        new: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    },
    film4 = {
        name: 'Люди в черном Интернешнл',
        start: '18:00',
        ganar: [0, 1, 4],
        hire: true,
        price: 320,
        new: false,

        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    },
    film5 = {
        name: 'История игрушек 4',
        start: '20:00',
        ganar: [2, 4, 5],
        hire: true,
        price: 300,
        new: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    },
    film6 = {
        name: 'Люди в черном',
        start: '22:00',
        ganar: [0, 1, 4],
        hire: true,
        new: false,
        price: 280,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    },

]

const ganars = [
    'Фантастика',
    'Боевик',
    'Фентези',
    'Драма',
    'Комедия',
    'Мультфильм',
    'Приключения',
]

//цикл которы формирут массив объектов МЕСТ
//Указать цены билета на центральные и боковые места
//Забронированные места будут генерироватся случайно через рандомайзер
//
const places = [
    place1 = {
        number: 1,
        price: 100,
        brone: true,
    },
    place2 = {
        number: 2,
        price: 100,
        brone: true,
    },
    place3 = {
        number: 3,
        price: 100,
        brone: true,
    },
    place4 = {
        number: 4,
        price: 100,
        brone: false,
    },
    place5 = {
        number: 5,
        price: 100,
        brone: true,
    },
    place6 = {
        number: 6,
        price: 100,
        brone: false,
    },
    place7 = {
        number: 7,
        price: 100,
        brone: false,
    },
    place8 = {
        number: 8,
        price: 100,
        brone: true,
    },
    place9 = {
        number: 9,
        price: 100,
        brone: true,
    },
    place10 = {
        number: 10,
        price: 100,
        brone: false,
    }
]

let placesHTML = document.querySelector('.places')
    // console.log(placesHTML)
    //перебираем массив состоящий из обьектов
for (place of places) {
    let placeDiv = document.createElement('div') //создаем див 
    placeDiv.innerHTML = place.number //выводим число
    placeDiv.classList.add('placeDiv') //добавим стиль

    if (place.brone) {
        placeDiv.classList.add('placeBrone') // if определит что выполнялось true или false в брони мест
    } else {
        placeDiv.classList.add('placeFree')
    }

    placesHTML.append(placeDiv) //необходимо вставить элемент
    console.log(place)
}
let filmsHire = []

let filmsNew = []

for (let i = 0; i < films.length; i++) {


    if (films[i].hire === true) {
        filmsHire.push(films[i])
    }

    if (films[i].hire === false && films[i].new === true)
        filmsNew.push(films[i])

}

const film = {
    getName: function() {
        return this.name
    },
    getStart: function() {
        return this.start
    },
    getGanar: function() {
        const ganarsFilm = this.ganar
        let arrGanars = []
        for (let i = 0; i < ganarsFilm.length; i++) {
            arrGanars.push(ganars[ganarsFilm[i]])
        }
        let strGanars = arrGanars.join(', ')
        return strGanars
    },
    getPrice: function() {
        return this.price
    }
}
let orderForm = document.getElementById('orderForm')
let closeOrderForm = document.getElementById('closeOrderForm')
closeOrderForm.onclick = function() {
    orderForm.style.display = 'none'
}

for (let i = 0; i < filmsHire.length; i++) {

    const filmName = film.getName.bind(filmsHire[i])()
    const filmStart = film.getStart.bind(filmsHire[i])()
    const filmGanars = film.getGanar.bind(filmsHire[i])()
    const filmPrice = film.getPrice.bind(filmsHire[i])()
    let filmsHireHTML = document.getElementById('filmsHire')


    let filmHTML = ` 
    <td id = "start_film_${1}">${filmStart}</td> 
    <td id = "name_film_${1}">${filmName}</td> 
    <td id = "ganar_film_${1}">${filmGanars}</td>
    <td>${filmPrice}</td>
    `
    let tr = document.createElement("tr")
        // tr.className = 'strFilmHire'
    tr.innerHTML = filmHTML
    tr.onclick = function() {


        orderForm.style.display = 'block'

        let orderFilmName = document.getElementById('orderFilmName')
        let orderFilmStart = document.getElementById('orderFilmStart')
        let orderFilmGanar = document.getElementById('orderFilmGanar')
        let orderFilmPrice = document.getElementById('orderFilmPrice')


        orderFilmName.innerHTML = filmName
        orderFilmStart.innerHTML = filmStart
        orderFilmGanar.innerHTML = filmGanars
        orderFilmPrice.innerHTML = filmPrice

        let orderFilmCountTicket = document.getElementById('orderFilmCountTicket')
        let orderFilmTotalPrice = document.getElementById('orderFilmTotalPrice')

        orderFilmTotalPrice.innerHTML = filmPrice * orderFilmCountTicket.value

        orderFilmCountTicket.onchange = function() {
            orderFilmTotalPrice.innerHTML = filmPrice * orderFilmCountTicket.value
        }

    }
    filmsHireHTML.appendChild(tr)

}

let sendOrder = document.getElementById('sendOrder')
sendOrder.onclick = function() {
    let orderClientName = document.getElementById('orderClientName')

    if (orderClientName.value) {
        nameGuest.style.border = '1px solid #bebebe'
    } else {
        nameGuest.style.border = '2px solid red'
    }

}
let orderFilmPrice = document.getElementById('orderFilmPrice')
let orderFilmCountTicket = document.getElementById('orderFilmCountTicket')
let orderFilmTotalPrice = document.getElementById('orderFilmTotalPrice')


// if (orderFilmPrice.value.length > 0) {
//     let totalPrice = orderFilmPrice.value * orderFilmCountTicket.value
// }


// const listFilms = document.querySelectorAll('.strFilmsHire')
// console.log('listFilms', listFilms)