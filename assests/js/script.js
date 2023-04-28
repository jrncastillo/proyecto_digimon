var url = "https://digimon-api.vercel.app/api/digimon"

var lista = document.querySelector("#lista")
var tarjetas = document.querySelector("#tarjetas")
fetch(url)
.then(response => response.json())
.then(datos => {
var i =1
for (item of datos){
lista.innerHTML+=`
<tr>
  <th scope="row">${i}</th>
  <td>${item.name}</td>
  <td>${item.level}</td>
  <td><img src="${item.img}" id="imagentabla"></td>
  <td><a href="${item.img}" target="_blank" class="btn btn-primary">Ver Imagen</a></td>
</tr>
`
visible2.innerHTML+=`
<div class="card col-sm-12 col-xxl-3 tarjeta">
  <img src="${item.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.level}.</p>
    <a href="${item.img}" target="_blank" class="btn btn-primary">Ver Imagen</a>
  </div>
</div>

` 
i++
}})



$(document).ready(function(){
  $("#boton1").click(function(){
    $("#visible1").css("display","block");
    $("#boton1").text("Doble Click para Ocultar Lista");
})})

$(document).ready(function(){
  $("#boton1").dblclick(function(){
    $("#visible1").css("display","none");
    $("#boton1").text("Ver Lista");
})})

//$(document).ready(function(){
  //$("#boton1").dblclick(function(){
    //$("#visible1").css("display","none");
//})})

$(document).ready(function(){
  $("#boton2").click(function(){
    $("#visible2").css("display","inline-block");
    $("#boton2").text("Doble Click para Ocultar Tarjetas");
})})

$(document).ready(function(){
  $("#boton2").dblclick(function(){
    $("#visible2").css("display","none");
    $("#boton2").text("Ver Tarjetas");
})})



