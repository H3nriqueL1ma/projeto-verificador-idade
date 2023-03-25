const text = document.querySelector('#text')
const text_img = document.querySelector('#text_image')
const button = document.querySelector('#verify')
const birth = document.querySelector('#birth')
const image = document.querySelector('#image')

button.addEventListener('click', verify)

function verify(event) {
    event.preventDefault()

    const date = new Date
    const year = date.getFullYear()
    const birth_ = Number(birth.value)
    const age = year - birth_
    const sex = document.querySelector('input[name="options"]:checked').value
    text.innerHTML = ''

    if (birth_ > year || birth_ <= 0) {
        alert('[ERROR]: ANO INVÁLIDO!')
    }
    else {
        if (sex === 'male') {
            if (age < 18 && age > 0) {
                text_img.innerHTML = `Detectamos Menino com ${age} anos.`
                image.setAttribute('src', 'foto-bebe-m.png')
            }
            else if (age < 20 && age >= 18) {
                text_img.innerHTML = `Detectamos Menino com ${age} anos.`
                image.setAttribute('src', 'foto-jovem-m.png')
            }
            else if (age < 64 && age >= 20) {
                text_img.innerHTML = `Detectamos Homem com ${age} anos.`
                image.setAttribute('src', 'foto-adulto-m.png')
            }
            else if (age >= 64) {
                text_img.innerHTML = `Detectamos Idoso com ${age} anos.`
                image.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        else if (sex === 'female') {
            if (age < 18 && age > 0) {
                text_img.innerHTML = `Detectamos Menina com ${age} anos.`
                image.setAttribute('src', 'foto-bebe-f.png')
            }
            else if (age < 20 && age >= 18) {
                text_img.innerHTML = `Detectamos Menina com ${age} anos.`
                image.setAttribute('src', 'foto-jovem-f.png')
            }
            else if (age < 64 && age >= 20) {
                text_img.innerHTML = `Detectamos Mulher com ${age} anos.`
                image.setAttribute('src', 'foto-adulto-f.png')
            }
            else if (age >= 64) {
                text_img.innerHTML = `Detectamos Idosa com ${age} anos.`
                image.setAttribute('src', 'foto-idoso-f.png')
            }
        }
    }
}