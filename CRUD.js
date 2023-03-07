const linkRoot = "https://ecommer-api.vercel.app/product";
function getByAjax() {
  $.ajax({
    url: `${linkRoot}`,
    type: "get",
    dataType: "json",
    success: function (data) {
      render(data);
      console.log(data);
    },
  });
}
getByAjax();
const tbody = document.querySelector("tbody");
function render(data) {
  let html = data.map((sp) => {
    return `<tr>
          <td class='id'>${sp.id}</td>
          <td class='name'>${sp.name}</td>
          <td class='img'>${sp.img}</td>
          <td class='des'>${sp.des}</td>
          <td class='action'><button onClick ='handleDelete(${sp.id})' class="btn btn-outline-danger">delete</button> 
          <button onClick ='handleEdit(${sp.id})' class="btn btn-outline-info">edit</button></td>
          </tr>`;
  });
  tbody.innerHTML = html.join("");
  value_img = "";
  value_name = "";
  value_des = "";
}
var item_img = document.querySelector("#img");
var item_name = document.querySelector("#name");
var item_des = document.querySelector("#des");
function handleAdd() {
  $.ajax({
    url: `${linkRoot}`,
    data: {
      name: item_name.value,
      img: item_img.value,
      des: item_des.value,
    },
    type: "post",
    dataType: "json",
    success: function (res) {
      getByAjax();
    },
  });
}
function handleDelete(id) {
  $.ajax({
    url: `${linkRoot}/${id}`,
    type: "delete",
    dataType: "json",
    success: function (data) {
      getByAjax();
    },
  });
}
let z = 0;
function handleEdit(id) {
  z = id;
  $.ajax({
    url: `${linkRoot}` + `/` + id,
    type: "get",
    dataType: "json",
    success: function (res) {
      item_name.value = res.name;
      item_img.value = res.img;
      item_des.value = res.des;
    },
  });
}

function handleUpdate() {
  $.ajax({
    url: `${linkRoot}/` + z,
    data: {
      name: item_name.value,
      img: item_img.value,
      des: item_des.value,
    },
    type: "put",
    dataType: "json",
    success: function (res) {
      getByAjax();
    },
  });
}
