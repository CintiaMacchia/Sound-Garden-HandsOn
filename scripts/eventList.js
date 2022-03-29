const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com'
const table = document.querySelector('tbody');
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
    }

const listEvents = async () => {
    const request = await fetch(`${BASE_URL}/events`, requestOptions)
    const responseContent = await request.json()
    //console.log(responseContent)
    let htmlData = ''
    for (let index = 0; index < responseContent.length; index++) {
        htmlData += `<tr>
        <th scope="row">${index}</th>
        <td>${responseContent[index].scheduled}</td>
        <td>${responseContent[index].name}</td>
        <td>${responseContent[index].attractions}</td>
        <td>
            <a href="reservas.html?id=${responseContent[index]._id}" class="btn btn-dark">ver reservas</a>
            <a href="editar-evento.html?id=${responseContent[index]._id}" class="btn btn-secondary">editar</a>
            <a href="excluir-evento.html?id=${responseContent[index]._id}" class="btn btn-danger">excluir</a>
        </td>
    </tr>`
    }
    table.innerHTML = htmlData
}

listEvents()
