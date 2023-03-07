const linkRoot = "https://ecommer-api.vercel.app/product";
function getByAjax() {
  $.ajax({
    url: `${linkRoot}`,
    type: "get",
    dataType: "json",
    success: function (res) {
      render(res);
    },
  });
}
getByAjax();
const card = document.querySelector("#card1");
function render(data) {
  let html = data.map((item) => {
    return `<div class="col-3 card mt-5">
    <img src="${item.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title" >${item.name}</h5>
      <p class="card-text">${item.des}</p>
    </div>
    <a href="#" class="btn btn-primary" >xem them</a>
  </div>`;
  });
  card.innerHTML = html.join("");
}
