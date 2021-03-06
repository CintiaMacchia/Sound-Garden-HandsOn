const inputNome = document.querySelector('#nome-dono');
const inputMail = document.querySelector('#email');
const inputIngressos = document.querySelector('#numingressos');
const form = document.querySelector('form')
const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const requestOptions = {
    method: 'GET',
    header: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow'
};

const request = async () => {
    try {
    const request = await fetch(`${BASE_URL}/bookings/event/${id}`, requestOptions)
    //console.log(request)
    const response = await request.json()
    console.log(response)
    let htmlData = ''
    for (let index = 0; index < response.length; index++) {
        //console.log(response[index]._id)
        htmlData += `<div class="mb-3">
        <label for="nome" class="form-label">Dono da reserva</label>
        <input type="text" class="form-control" id="nome-dono" aria-describedby="nome" value="${response[index].owner_name}"
            disabled>
    </div>
    <div class="mb-3">
        <label for="banner" class="form-label">E-Mail</label>
        <input type="email" class="form-control" id="email" aria-describedby="banner"
            value="${response[index].owner_email}" disabled>
    </div>
    <div class="mb-3">
        <label for="lotacao" class="form-label">Número de ingressos</label>
        <input type="number" class="form-control" id="numingressos" aria-describedby="lotacao"
            value="${response[index].number_tickets}" disabled>
    </div>
    <a href="reserva.html?id=${response[index]._id}" class="btn btn-danger">excluir reserva</a>
    <hr>`
    }
    form.innerHTML = htmlData 
    } catch(e) {
        console.log(e)
    }
    
}

request()
