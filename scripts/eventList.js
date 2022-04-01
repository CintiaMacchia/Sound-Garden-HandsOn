const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com'
const table = document.querySelector('tbody');
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
    }

const listEvents = async () => {
    try{
    const request = await fetch(`${BASE_URL}/events`, requestOptions)
    const responseContent = await request.json()
    let htmlData = ''
    for (let index = 0; index < responseContent.length; index++) {
        const datas = responseContent[index].scheduled
        const datasFormatadas = new Date(datas)
        htmlData += `<tr>
        <th scope="row">${index}</th>
        <td>${datasFormatadas}</td>
        <td>${responseContent[index].name}</td>
        <td>${responseContent[index].attractions}</td>
        <td>
            <a href="listarReservas.html?id=${responseContent[index]._id}" class="btn btn-dark">ver reservas</a>
            <a href="editar-evento.html?id=${responseContent[index]._id}" class="btn btn-secondary">editar</a>
            <a href="excluir-evento.html?id=${responseContent[index]._id}" class="btn btn-danger">excluir</a>
        </td>
    </tr>`
    }
    table.innerHTML = htmlData
}catch(erro){
    alert("Servidor indisponível, tente mais tarde.");
}
}

listEvents()
