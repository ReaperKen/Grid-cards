// class Calculadora {
//         constructor(){

//         }
//     sumar(num1,num2){
//         return parseInt(num1) + parseInt(num2);
//     }
//     restar(num1,num2){
//         return parseInt(num1) - parseInt(num2);
//     }
//     multiplicar(num1,num2){
//         return parseInt(num1) * parseInt(num2);
//     }
//     dividir(num1,num2){
//         return parseInt(num1) / parseInt(num2);
//     }
//     potencias(num1,exp){
//         return parseFloat(num1) ** parseFloat(exp);
//     }
//     cuadrada(num1){
//         return Math.sqrt(num1);
//     }
//     cubica(num1){
//         return Math.cbrt(num1);
//     }
// }

// const calculadora = new Calculadora();

// alert("Que operacion desea realizar?");
// let op = prompt("1: Suma, 2: Resta, 3: Multiplicación, 4: División, 5: Potenciación, 6: Raíz Cuadrada, 7: Raíz Cúbica.");

// if(op == 1){
//     let num1 = prompt("Digite el primer número: ");
//     let num2 = prompt("Digite el segundo número: ");
//     resultado = calculadora.sumar(num1, num2);
//     alert("El resultado de la suma es: " + resultado);
// }
// else if(op == 2){
//     let num1 = prompt("Digite el primer número: ");
//     let num2 = prompt("Digite el segundo número: ");
//     resultado = calculadora.restar(num1, num2);
//     alert("El resultado de la resta es: " + resultado);
// }
// else if(op == 3){
//     let num1 = prompt("Digite el primer número: ");
//     let num2 = prompt("Digite el segundo número: ");
//     resultado = calculadora.multiplicar(num1, num2);
//     alert("El resultado de la multiplicación es: " + resultado);
// }
// else if(op == 4){
//     let num1 = prompt("Digite el primer número: ");
//     let num2 = prompt("Digite el segundo número: ");
//     resultado = calculadora.dividir(num1, num2);
//     alert("El resultado de la división es: " + resultado);
// }
// else if(op == 5){
//     let num1 = prompt("Digite el primer número: ");
//     let num2 = prompt("Digite el segundo número: ");
//     resultado = calculadora.potencias(num1, num2);
//     alert("El resultado de la potencia es: " + resultado);
// }
// else if(op == 6){
//     let num1 = prompt("Digite un número: ");
//     resultado = calculadora.cuadrada(num1);
//     alert("El resultado de la raíz cuadrada es: " + resultado);
// }
// else if(op == 7){
//     let num1 = prompt("Digite un número: ");
//     resultado = calculadora.cubica(num1);
//     alert("El resultado de la raíz cúbica es: " + resultado);
// }else{
//     alert("No se ha encontrado el tipo de operación.");
// }



// const info = (materia)=>{
//     materias = {
//         fisica: ["Perez", "pedro", "pepito", "cofla", "alberto"],
//         quimica: ["Rodriguez", "pedro", "juan", "pepito"],
//         matematicas: ["Andres", "pedro", "juan", "pepito", "cofla"],
//         sociales: ["Garcia", "pedro", "juan", "pepito", "cofla", "alberto"]
//     }
//     if(materias[materia] !== undefined){
//         return [materias[materia],materia,materias];
//     }else{
//         return materias;
//     }
// }
// const showInfo = (materia)=>{
//     let informacion = info(materia);
//     if(informacion !== false){
//         let profesor = info(materia)[0][0];
//         let alumnos = info(materia)[0];
//         alumnos.shift()
//         document.write(`El profesor de <b>${informacion[1]}</b> es: ${profesor} <br> los alumnos que asistieron son:  <b style="color: red">${alumnos}</b><br>`);
// }
// }
// const cantClass = (alumno)=>{
//     let informacion = info();
//     let cantidadT = 0;
//     for(info in informacion){
//         if(informacion[info].includes(alumno)){
//             cantidadT++;
//         }
//     }
//     return cantidadT;
// }
// showInfo("fisica");
// showInfo("quimica");
// showInfo("matematicas");
// showInfo("sociales");

// document.write(cantClass("cofla"))
// let materias = {
//     fisica: ["Perez", "pedro", "pepito", "cofla", "alberto"],
//     quimica: ["Rodriguez", "pedro", "juan", "pepito"],
//     matematicas: ["Andres", "pedro", "juan", "pepito", "cofla"],
//     sociales: ["Garcia", "pedro", "juan", "pepito", "cofla", "alberto"]
// }

// const inscribir = (alumno, materia)=>{
//     personas = materias[materia];
//     personas.shift();
//     alumnos = personas;
//     if (alumno.length >= 20){
//         document.write(`${alumno} Lo siento, las clases de la materia de ${materia} estan llenas.`)
//     }else{
//         alumnos.push(alumno)
//         if(materia == "fisica"){
//             materias = {
//                 fisica: alumnos,
//                 quimica: materias["quimica"],
//                 matematicas: materias["matematicas"],
//                 sociales: materias["sociales"],
//             } 
//         }
//         else if(materia == "quimica"){
//             materias = {
//                 fisica: materias["fisica"],
//                 quimica: alumnos,
//                 matematicas: materias["matematicas"],
//                 sociales: materias["sociales"],
//             }
//         }
//         else if(materia == "matematicas"){
//             materias = {
//                 fisica: materias["fisica"],
//                 quimica: materias["quimica"],
//                 matematicas: alumnos,
//                 sociales: materias["sociales"],
//             }
//         }
//         else if(materia == "sociales"){
//             materias = {
//                 fisica: materias["quimica"],
//                 quimica: materias["quimica"],
//                 matematicas: materias["matematicas"],
//                 sociales: alumnos,
//             }
//         }
//         document.write(`Felicidades ${alumno} te haz inscrito a la materia de ${materia} correctamente`);
//     }
// }
// inscribir("juan", "fisica");


// let materias = {
//     fisica: [90,6,4, "fisica"],
//     quimica: [84,8,2, "quimica"],
//     ingles: [92,8,4, "ingles"],
//     etica: [96,8,4, "etica"],
//     matematicas: [91,6,3, "matematicas"],
//     algebra: [79,7,4, "algebra"],
//     calculo: [75,9,2, "calculo"],
//     biologia: [98,9,1, "biologia"],
//     bbdd: [100,10,4, "bbdd"],
// }
// const aprobo = ()=>{
//     for(materia in materias){


//         let asistencia = materias[materia][0];  
//         let promedio = materias[materia][1];
//         let trabajo = materias[materia][2];
        
//         console.log(materias[materia][3]);
//         if(asistencia >= 90){

//             console.log(`%cAsistencias en orden.`, `color:green`);
//         }else{
//             console.log(`%cFalta de asistencias`, `color:red`);
//         }
//         if(promedio >= 7){
//             console.log("%cPromedio en orden.", "color:green");
//         }else{
//             console.log("%cPromedio desaprobado.", "color:red");
//         }
//         if(trabajo >= 3){
//             console.log("%cTrabajos practicos en orden.", "color:green");
//         }else{
//             console.log("%cFaltan trabajos practicos.", "color:red")
//         }
//     }

// }
// aprobo()
// let trabajo = "240 minutos de trabajo";
// let estudio = "100 minutos de estudio";
// let tp = "100 minutos de trabajos practicos";
// let homework = "30 minutos de tareas de la casa";
// let descanso = "10 minutos de descanso";

// console.log("Tareas");

// for(i = 0; i < 14; i++){
//     if(i == 0){
//         console.groupCollapsed("Semana 1");
//     }
//     console.groupCollapsed("Dia " + (i+1));
//     console.log(trabajo);
//     console.log(descanso);
//     console.log(estudio);
//     console.log(tp);
//     console.log(homework);
//     console.groupEnd();
//     if(i == 6){
//             console.groupEnd();
//             console.groupCollapsed("Semana 2");
//     }
// }
// console.groupEnd();
// class celulares{
//     constructor(color, peso, resolucion, camara, ram){
//         this.color = color;
//         this.peso = peso;
//         this. resolucion = resolucion;
//         this.camara = camara;
//         this.ram = ram;
//         this.encendido = false;
//     }
//     botonApagarEncender(){
//         if(this.encendido == false){
//             alert("Celular prendido");
//             this.encendido = true;
//         }else{
//             alert("Celular apagado");
//             this.encendido = false;
//         }
//     }
//     reiniciar(){
//         if(this.encendido == true){
//             alert("Reiniciando celular");
//         }else{
//             alert("El celular esta apagado");
//         }
//     }
//     fotos(){
//         alert(`Foto tomada en una resolución de: ${this.camara}`);
//     }
//     grabar(){
//         alert(`Video grabado en una resolución de: ${this.camara}`);
//     }
//     Info(){
//         return `
//          Color: <b>${this.color}</b> <br>
//          Peso: <b>${this.peso}</b> <br>
//          Tamaño: <b>${this.resolucion}</b> <br>
//          Resolución de cámara: <b>${this.camara}</b> <br>
//          Ram: <b>${this.ram}</b> <br>`
//     }
// }




// class celAlta extends celulares{
//     constructor(color, peso, resolucion, camara, ram, extra){
//         super(color, peso, resolucion, camara, ram);
//         this.extra = extra;

//     }
//     slowMotion(){
//         alert("Estas grabando en cámara lenta.");
//     }
//     reconocimientof(){
//         alert("Iniciando reconocimiento facial.");
//     }
//     altaInfo(){
//         return this.Info() + `Resolución de cámara extra: <b> ${this.extra}</b> <br>`;
//     }
// }






// const celular1 = new celulares("Rojo", "150", "10", "Full HD", "2GB");
// const celular2 = new celulares("Blanco", "140", "5", "HD", "3GB");
// const celular3 = new celulares("Negro", "120", "7", "Full HD 4K", "6GB");
// const celular4 = new celAlta("Rojo", "130", "5.6", "4K", "6GB", "FULL HD");
// const celular5 = new celAlta("Blanco", "130", "5", "4K", "8GB", "FULL HD");

// // celular1.botonApagarEncender();
// // celular1.fotos();
// // celular1.grabar();
// // celular1.reiniciar();
// // celular1.botonApagarEncender();
// // document.write(`
// //     ${celular1.Info()}<br>
// //     ${celular2.Info()}<br>
// //     ${celular3.Info()}
// // `);
// document.write(`
//     ${celular4.altaInfo()}<br>
//     ${celular5.altaInfo()}<br>
// `)

// class App {
//     constructor(descargas, puntuacion, peso){
//         this.descargas = descargas;
//         this.puntuacion = puntuacion;
//         this.peso = peso;
//         this.iniciada = false;
//         this.instalada = false;
//     }
//     abrir(){
//         if(this.iniciada == false && this.instalada == true){
//             this.iniciada = true;
//             alert("App iniciada");
//         }
//     }
//     cerrar(){
//         if(this.iniciada == true && this.instalada == true){
//             this.iniciada = false;
//             alert("App cerrada");
//         }
//     }
//     instalar(){
//         if(this.instalada == false){
//             this.instalada = true;
//             alert("App instalada correctamente");
//         }else{
//                 alert("Ha ocurrido un error");
//         }
//     }  
//     desinstalar(){
//         if(this.instalada == true){
//             this.instalada = false;
//             if(this.instalada == false){
//                 alert("App desinstalada correctamente");
//             }
//         }
//     }
//     appInfo(){
//         return `
//         Descargas: <b>${this.descargas}</b><br>
//         Puntuacion: <b>${this.puntuacion}</b><br>
//         Peso: <b>${this.peso}</b><br>
//         <br>`
//     }
// }
// const app = new App("16K", "5", "90MB");
// const app2 = new App("18K", "4", "900MB");
// const app3 = new App("15K", "3", "100MB");
// const app4 = new App("12K", "5", "1000MB");
// const app5 = new App("10", "4", "30MB");
// const app6 = new App("17", "2", "40MB");
// const app7 = new App("10K", "1", "60MB");


// document.write(app.appInfo());
// document.write(app2.appInfo());
// document.write(app3.appInfo());
// document.write(app4.appInfo());
// document.write(app5.appInfo());
// document.write(app6.appInfo());
// document.write(app7.appInfo());

