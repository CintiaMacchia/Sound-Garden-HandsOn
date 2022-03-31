const cardsContainer = document.querySelector("#cardContainer");
//console.log(cardsContainer);
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const requestOptions = {
  method: "GET",
  redirect: "follow",
};

const listEvents = async () => {
  const request = await fetch(`${BASE_URL}/events`, requestOptions);
  const responseContent = await request.json();
  //console.log(responseContent);
  let htmlData = "";
  for (let index = 0; index < responseContent.length; index++) {
    const datas = responseContent[index].scheduled;
    const datasFormatadas = new Date(datas);
    htmlData += ` <article class="evento card p-5 m-3">
        <h2>${responseContent[index].name} - ${datasFormatadas.toLocaleString(
      "en-GB"
    )}</h2>
        <h4>${responseContent[index].attractions}</h4>
        <p>${responseContent[index].description}</p>
        <a href="#?id=${responseContent[index]._id}" event-id="${responseContent[index]._id
      }" class="btn btn-primary">reservar ingresso</a>
    </article>`;
  }
  cardsContainer.innerHTML = htmlData;
  adicionarEvento();
};

listEvents();
