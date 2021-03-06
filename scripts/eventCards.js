const cardsContainer = document.querySelector("#cardContainer");
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const requestOptions = {
  method: "GET",
  redirect: "follow",
};

const listEvents = async () => {
  try {
    const request = await fetch(`${BASE_URL}/events`, requestOptions);
    const responseContent = await request.json();
    let htmlData = "";
    for (let index = 0; index < 3; index++) {
      const datas = responseContent[index].scheduled;
      const datasFormatadas = new Date(datas);
      //console.log(responseContent[index]._id);
      htmlData += ` <article class="evento card p-5 m-3">
        <h2>${responseContent[index].name} - ${datasFormatadas.toLocaleString(
        "pt-BR"
      )}</h2>
        <h4>${responseContent[index].attractions}</h4>
        <p>${responseContent[index].description}</p>
        <a href="#?id=${responseContent[index]._id}" event-id="${
        responseContent[index]._id
      }" class="btn btn-primary openModal">reservar ingresso</a>
    </article>`;
    }
    cardsContainer.innerHTML = htmlData;
    adicionarEvento();
  } catch {
    alert("Servidor indisponível, tente mais tarde.");
  }
};

listEvents();
