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

const request = async () => {
    const request = await fetch(`${BASE_URL}/events/${id}`)
    const response = await request.json()
    const {name, poster, attractions, description, scheduled, number_tickets} = response
    inputNome.value = name
    inputBanner.value = poster
    inputAtracoes.value = attractions
    inputDescricao.value = description
    inputData.value = scheduled
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
