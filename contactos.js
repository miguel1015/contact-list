
// /* ------------------------------Metodo de agregar y eliminar datos de un array por medio de funciones------------------------------ */

// /*Lista de contactos*/
const listaDeContacto = [
    "Luis Garcia: 1321154877, 3225874898 ,barranquilla ,calle 122 #22-13",
    
    "Miguel Salazar: 1787845664, 358447, paris, calle 22 #88-13", 

    "Guillermo Morris: 9788984, 3148742, cancun, kra 98 dig 88-23",

    "Mario Gotze: 02258966, 36698547, alemania, diag 27 #332-53",

    "Benito Suarez: 01258899, 322545458, mexico, calle 2 #789-15",

    "Maria Lapadula: 145498477, 326541654, peru, kra 098 #34-88",

    "Ronaldo de Asis: 456887798, 32852211, españa, kra 2 #86-78",
];

 /* ------------------------------crear contacto------------------------------ */
 function ingresarDatos(datos){
     listaDeContacto.push(datos);
 }

 ingresarDatos("Cristiano Ronaldo: 456887798, 32852211, portugal, dig 1235 #78-98")
 console.log(listaDeContacto);

/* ------------------------------elimnar contacto------------------------------ */
 function eliminarContacto(posicionDatoAEliminar, numeroDeDatosAEliminar){
     listaDeContacto.splice(posicionDatoAEliminar, numeroDeDatosAEliminar);
 }

 eliminarContacto(3,1);
 console.log(listaDeContacto);


// /* ------------------------------editar contacto------------------------------ */


function editarContacto(posicionEditarContacto, numeroEditarContacto, editarContacto){
    listaDeContacto.splice(posicionEditarContacto, numeroEditarContacto, editarContacto);
}

editarContacto(2,1, "Guillermo isaac Morris gonzales: 02184851, 34789212, santa marta, calle 55 dig 88-22");
console.log(listaDeContacto);



