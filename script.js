var texto = document.querySelector('#texto')
var texto_img = document.querySelector('#textoimagem')
var button = document.querySelector('#verificar')
var nasc = document.querySelector('#nasc')
var imagem = document.querySelector('#imagem')

button.addEventListener('click', verificar)

function verificar(event) {
    event.preventDefault()

    const data = new Date
    const ano = data.getFullYear()
    const nascimento = Number(nasc.value)
    const idade = ano - nascimento
    const sexo = document.querySelector('input[name="options"]:checked').value
    texto.innerHTML = ''

    if (nascimento > ano || nascimento <= 0) {
        alert('[ERRO]: ANO INVÁLIDO!')
    }
    else {
        if (sexo === 'male') {
            if (idade < 18 && idade > 0) {
                texto_img.innerHTML = `Detectamos Menino com ${idade} anos.`
                imagem.setAttribute('src', 'foto-bebe-m.png')
            }
            else if (idade < 20 && idade >= 18) {
                texto_img.innerHTML = `Detectamos Menino com ${idade} anos.`
                imagem.setAttribute('src', 'foto-jovem-m.png')
            }
            else if (idade < 64 && idade >= 20) {
                texto_img.innerHTML = `Detectamos Homem com ${idade} anos.`
                imagem.setAttribute('src', 'foto-adulto-m.png')
            }
            else if (idade >= 64) {
                texto_img.innerHTML = `Detectamos Idoso com ${idade} anos.`
                imagem.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        else if (sexo === 'female') {
            if (idade < 18 && idade > 0) {
                texto_img.innerHTML = `Detectamos Menina com ${idade} anos.`
                imagem.setAttribute('src', 'foto-bebe-f.png')
            }
            else if (idade < 20 && idade >= 18) {
                texto_img.innerHTML = `Detectamos Menina com ${idade} anos.`
                imagem.setAttribute('src', 'foto-jovem-f.png')
            }
            else if (idade < 64 && idade >= 20) {
                texto_img.innerHTML = `Detectamos Mulher com ${idade} anos.`
                imagem.setAttribute('src', 'foto-adulto-f.png')
            }
            else if (idade >= 64) {
                texto_img.innerHTML = `Detectamos Idosa com ${idade} anos.`
                imagem.setAttribute('src', 'foto-idoso-f.png')
            }
        }
    }
}