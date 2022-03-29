const inputNome = document.querySelector('#nome');
const inputBanner = document.querySelector('#banner');
const inputAtracoes = document.querySelector('#atracoes');
const inputDescricao = document.querySelector('#descricao');
const inputData = document.querySelector('#data');
const inputLotacao = document.querySelector('#lotacao');
const form = document.querySelector('form')
const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

const formatNumber = (numero) => {
    if ( numero < 10 ) {
        return "0"+numero
    }
    return numero
}

const request = async () => {
    const request = await fetch(`${BASE_URL}/events/${id}`)
    const response = await request.json()
    const {name, poster, attractions, description, scheduled, number_tickets} = response
    const newDate = new Date(scheduled)
    const dataFormatada = `${newDate.getFullYear()}-${formatNumber(newDate.getMonth())}-${newDate.getDate()}T${formatNumber(newDate.getHours())}:${formatNumber(newDate.getMinutes())}`
    inputNome.value = name
    inputBanner.value = poster
    inputAtracoes.value = attractions
    inputDescricao.value = description
    inputData.value = dataFormatada
    inputLotacao.value = number_tickets
}

request()

form.addEventListener('submit', async event => {
    event.preventDefault()
    const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    }
    const request = await fetch(`${BASE_URL}/events/${id}`, requestOptions);
    alert('Evento excluido!');
    window.location.replace('./admin.html')
})
