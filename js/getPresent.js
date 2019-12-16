let buttonShowModalPresent = document.getElementById('getPresentModal')
let modalPresentWindow = document.getElementById('modalPresent')
let closePresentWindow = document.getElementById('closeModalPresent')
let sendPresentInfo = document.getElementById('sendPresentInfo')

buttonShowModalPresent.onclick = function() {
    modalPresentWindow.style.display = 'block'
}

closePresentWindow.onclick = function() {
    modalPresentWindow.style.display = 'none'
}

sendPresentInfo.onclick = function() {
    let nameGuest = document.getElementById('name_guest')
    let selectGuest = document.getElementById('select_guest')

    if (nameGuest.value) {
        console.log('nameGuest', nameGuest.value)
        nameGuest.style.border = '1px solid #bebebe'
    } else {
        nameGuest.style.border = '2px solid red'
    }
    if (selectGuest.value != 0) {
        console.log('selectGuest', selectGuest)
        nameGuest.style.border = '1px solid #bebebe'
    } else {
        nameGuest.style.border = '2px solid red'
    }

    if (selectGuest.value != 0 && selectGuest.value) {
        modalPresentWindow.style.display = 'none'
    }
}
let nameGuest = document.getElementById('name_guest')
nameGuest.onchange = function() { // Показывает ввод данных в строке без нажатия кнопки отправить (onchange)
    console.log('nameGuest', nameGuest.value)
}

let selectGuest = document.getElementById('select_guest')
selectGuest.onchange = function() { // Показывает ввод данных в строке без нажатия кнопки отправить (onchange)
    console.log('selectGuest', selectGuest.value)
}