const text = $('#text')
const text_img = $('#text_image')
const button = $('#verify')
const birth = $('#birth')
const image = $('#image')

button.on('click', verify)

function verify(event) {
    event.preventDefault()

    const date = new Date
    const year = date.getFullYear()
    const birth_ = Number(birth.val())
    const age = year - birth_
    const sex = $('input[name="options"]:checked').val()
    const sexOption = $('input[name="options"]:checked')
    if (sexOption.length === 0) {
        alert('[ERROR]: SEXO INVÁLIDO!')
        return
    }
    else {
        if (birth_ > year || birth_ <= 0) {
            alert('[ERROR]: ANO INVÁLIDO!')
        }
        else {
            text.text('')
            if (sex === 'male') {
                if (age < 18 && age > 0) {
                    text_img.text(`Detectamos Menino com ${age} anos.`)
                    image.attr('src', 'foto-bebe-m.png')
                }
                else if (age < 20 && age >= 18) {
                    text_img.text(`Detectamos Menino com ${age} anos.`)
                    image.attr('src', 'foto-jovem-m.png')
                }
                else if (age < 64 && age >= 20) {
                    text_img.text(`Detectamos Homem com ${age} anos.`)
                    image.attr('src', 'foto-adulto-m.png')
                }
                else if (age >= 64) {
                    text_img.text(`Detectamos Idoso com ${age} anos.`)
                    image.attr('src', 'foto-idoso-m.png')
                }
            }
            else if (sex === 'female') {
                if (age < 18 && age > 0) {
                    text_img.text(`Detectamos Menina com ${age} anos.`)
                    image.attr('src', 'foto-bebe-f.png')
                }
                else if (age < 20 && age >= 18) {
                    text_img.text(`Detectamos Menina com ${age} anos.`)
                    image.attr('src', 'foto-jovem-f.png')
                }
                else if (age < 64 && age >= 20) {
                    text_img.text(`Detectamos Mulher com ${age} anos.`)
                    image.attr('src', 'foto-adulto-f.png')
                }
                else if (age >= 64) {
                    text_img.text(`Detectamos Idosa com ${age} anos.`)
                    image.attr('src', 'foto-idoso-f.png')
                }
            }
        }
    }
}