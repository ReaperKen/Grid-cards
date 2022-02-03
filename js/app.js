const bg = document.querySelector('body');
const button = document.querySelector('.dark');

button.addEventListener('click', ()=>{
    bg.classList.toggle('white');
});














































// const contenedor = document.querySelector(".flex-container");


// function crearLlave(nombre, modelo, precio){
//     img = "<img src='llave.png' class='llave-img'>";
//     nombre = `<h2>${nombre}</h2>`;
//     modelo = `<h3>${modelo}</h3>`;
//     precio = `<p>Precio: <b>$${precio}</b></p>`;
//     return [img, nombre, modelo, precio];
// }

// const changeHidden = (number)=>{
//     document.querySelector(".key-data").value = number;
// }




// let documentFragment = document.createDocumentFragment();

// for(var i = 1; i <= 20; i++){
//     let modeloRandom = Math.round(Math.random()*10000);
//     let precioRandom = Math.round(Math.random()*10+30);
//     let llave = crearLlave(`llave ${i}`, ` Modelo: ${modeloRandom}`, precioRandom);
//     let div = document.createElement("DIV");
//     div.addEventListener("click",()=>{changeHidden(modeloRandom)});
//     div.tabIndex = i;
//     div.classList.add(`item-${i}`, `flex-item`);
//     div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
//     documentFragment.appendChild(div);
// }

// contenedor.appendChild(documentFragment);

// const contenedor = document.querySelector(".flex-container");
// function crearLlave(nombre, modelo, precio){
//     img = "<img src='llave.png'>";
//     nombre = `<h2>${nombre}</h2>`;
//     modelo = `<h3>${modelo}</h3>`;
//     precio = `<p>Precio: <b>$${precio}</b></p>`;
//    return [img, nombre, modelo, precio];
// }
// let documentFragment = document.createDocumentFragment();

// for(var i = 0; i < 20; i++){

//     let modeloRandom = Math.round(Math.random()*10000);
//     let precioRandom = Math.round(Math.random()*10+30);
//     let llave = crearLlave(`llave ${i}`, ` Modelo: ${modeloRandom}`, precioRandom);
//     let div = document.createElement("DIV");
//     div.classList.add(`item-${i}`, `flex-item`);
//     div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
//     documentFragment.appendChild(div);
// }
// contenedor.appendChild(documentFragment);