const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const inputNome = document.querySelector('#nome')
const inputMail = document.querySelector('#email')
const inputIngressos = document.querySelector('#lotacao');
const form = document.querySelector('form')
const button = document.querySelector('button')

const requestOptions = {
    method: 'GET',
    header: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow'
};

const request = async () => {
    const request = await fetch(`${BASE_URL}/bookings/${id}`, requestOptions)
    //console.log(request)
    const response = await request.json()
    //console.log(response.event._id)
    const {owner_name, owner_email, number_tickets} = response
    inputNome.value = owner_name
    inputMail.value = owner_email
    inputIngressos.value = number_tickets
    button.setAttribute('eventId', response.event._id)
}

request()

form.addEventListener('submit', async event => {
    event.preventDefault()
    const requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    }
    const request = await fetch(`${BASE_URL}/bookings/${id}`, requestOptions);
    alert('Reserva excluida!');
    window.location.replace(`./listarReservas.html?id=${button.getAttribute('eventId')}`)
})

console.log(button.getAttribute('eventId'))

