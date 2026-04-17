
const btn = document.getElementById("botonAceptar");

btn.addEventListener("click", function(){ 

    
    

    const nombreUsuario = document.getElementById("name").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;

    //datos del taller
    const nombreTaller = document.getElementById("nombreTaller").value;
    const contacto = document.getElementById("infContacto").value;
    const descripcion = document.getElementById("descripcion").value;
    const actividades = document.getElementById("actividades").value;
    const rubro = document.getElementById("rubro").value;
    const redesSociales = document.getElementById("RedesSociales").value;




    const mensaje=document.getElementById("resultadoDelRegistro");

    mensaje.innerHTML=`
    <div class="card-registro">
        <h2>Taller Registrado</h2>
        <div class="datos-grid">
            <div class="item-dato"><strong>Colaborador/a:</strong>${nombreUsuario}</div>
             <div class="item-dato"><strong>Telefono:</strong>${telefono}</div>
             <div class="item-dato"><strong>Email:</strong>${correo}</div>
             <div class="item-dato"><strong>Taller:</strong>${nombreTaller}</div>
             <div class="item-dato"><strong>Rubro:</strong>${rubro}</div>
             <div class="item-dato"><strong>Redes:</strong>${redesSociales}</div>
        </div>
        <hr style="margin:20px0;border:0;border-top:1px solid #eee;">
        <div class="item-dato"><strong>Actividades:</strong>${actividades}</div>
        <div class="item-dato"><strong>Descripcion:</strong>${descripcion}</div>

    </div>
     `;

 });

