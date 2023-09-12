function agregarTarea(){
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    if(nuevaTareaTexto !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = nuevaTareaTexto;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "delete";
        botonEliminar.onclick = function (){
            listaTareas.removeChild(nuevaTarea)
        };

        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
        nuevaTareaInput.value = "";
    }
}

function marcarCompletada(tarea){
    tarea.classList.toggle("completed");
}


document.getElementById("listaTareas").addEventListener("click",
function(event){
    if(event.target.tagName === "LI"){
        marcarCompletada(event.target)
    }
});


document.getElementById("agregar").addEventListener("click", agregarTarea);


//Agregar boton mostrar completadas y Mostrar pendientes

function mostrarCompletadas(){
    const tareas = document.querySelectorAll("li");

    tareas.forEach(tarea => {
        if(tarea.classList.contains("completed")){
            tarea.style.display = "flex";
        }
        else{
            tarea.style.display = "none"
        }
    })
}

document.getElementById("completadas").addEventListener("click",mostrarCompletadas)


function mostrarPendientes(){
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        if(!tarea.classList.contains("completed")){
            tarea.style.display = "flex"
        }
        else{
            tarea.style.display = "none"
        }
    })
}

document.getElementById("pendientes").addEventListener("click", mostrarPendientes)