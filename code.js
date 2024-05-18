let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);

function obtenerDatosDelUsuario() {
  datosPersona.nombre = prompt("Ingresa tu nombre:");
  const anioNacimiento = prompt("Ingresa tu año de nacimiento:");
  datosPersona.edad = new Date().getFullYear() - anioNacimiento;
  datosPersona.ciudad = prompt("Ingresa tu ciudad:");
  datosPersona.interesPorJs = confirm("¿Te interesa JavaScript?") ? "Sí" : "No";
}

function renderizarDatosUsuario() {
  obtenerDatosDelUsuario();
  document.getElementById("nombre").textContent = datosPersona.nombre;
  document.getElementById("edad").textContent = datosPersona.edad;
  document.getElementById("ciudad").textContent = datosPersona.ciudad;
  document.getElementById("javascript").textContent = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
  const fila = document.getElementById("fila");
  fila.textContent = "";
  listado.forEach(item => {
    const caja = document.createElement("div");
    caja.className = "caja";
    
    const img = document.createElement("img");
    img.src = item.imgUrl;
    img.alt = item.lenguajes;
    caja.appendChild(img);
    
    const lenguajes = document.createElement("p");
    lenguajes.className = "lenguajes";
    lenguajes.textContent = item.lenguajes;
    caja.appendChild(lenguajes);
    
    const bimestre = document.createElement("p");
    bimestre.className = "bimestre";
    bimestre.textContent = item.bimestre;
    caja.appendChild(bimestre);
    
    fila.appendChild(caja);
  });
}

function alternarColorTema() {
  document.getElementById("sitio").classList.toggle("dark");
}

document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === 'f') {
    document.getElementById("sobre-mi").classList.remove("oculto");
  }
});