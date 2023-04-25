
var url = "https://digimon-api.vercel.app/api/digimon"


var contenido = document.querySelector("#contenido")



fetch(url)
.then(response => response(JSON))
.then(datos =>{
    console.log(datos)
    
    for (item in datos){
    
    contenido.innerHTML *= `

    <div class="card" style="width: 18rem;">
    <img src="${item.img}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.label}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>  
    `}
})
