
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lado-derecho').forEach(lado => {
        mostrarContenido(lado.querySelector('button'), 'descripcion');
    });
});

function mostrarContenido(boton, seccion, lat, lng, nombreCine) {
  const contenedor = boton.closest('.lado-derecho');
  const contenido = contenedor.querySelector('.contenido');

  if (seccion === 'descripcion') {
    contenido.innerHTML = `
      <br><br><p class="subtitulo"><strong>"MEGACINES"</strong>, <br>
      ofrece una experiencia moderna y confortable para <br>
      disfrutar de las mejores películas. <br>
      Con salas amplias, proyección en 4K y sonido envolvente, <br> 
      es el lugar ideal para pasar un buen momento en familia o con amigos.</p>
    `;
  } else if (seccion === 'horario') {
    contenido.innerHTML = `
      <br><br><h2>Horarios</h2>
      <table class="cines-horarios">
        <tr>
            <td> HORA </td>
            <td> LUNES </td>
            <td> MARTES </td>
            <td> MIERCOLES </td>
            <td> JUEVES </td>
            <td> VIERNES </td>
            <td> SABADO </td>
            <td> DOMINGO </td>
        </tr>
        <tr>
            <td>3:30pm</td>
            <td>Flow</td>
            <td>Los Tipos Malos</td>
            <td>Terremoto Magnitud 9.0</td>
            <td>El gato con botas: El último deseo</td>
            <td>Ready Player One</td>
            <td>WALL-E</td>
            <td>Colorful Stage La Película: Miku no Puede cantar</td>
        </tr>
        <tr>
            <td>3:30pm</td>
            <td>Flow</td>
            <td>Jurassic Park</td>
            <td>Volver al Futuro</td>
            <td>Avengers End Game</td>
            <td>El gato con botas: El último deseo</td>
            <td>Soy leyenda</td>
            <td>Ready Player One</td>
        </tr>
        <tr>
            <td>5:25pm</td>
            <td>WALL-E</td>
            <td>El gato con botas: El último deseo</td>
            <td>Star Wars III La Venganza de los Sith (20 Aniv)</td>
            <td>Los Tipos Malos</td>
            <td>Colorful Stage La Película: Miku no Puede cantar</td>
            <td>Flow</td>
            <td>Volver al Futuro</td>
        </tr>
     </table>    
    `;
  } else if (seccion === 'mapa') {
    contenido.innerHTML = `
      <h2>Mapa del Cine</h2>
      <div id="mapaCine" style="height:300px; width:100%; border-radius:10px;"></div>
    `;

    // Esperamos a que el div exista
    setTimeout(() => {
      const coords = [lat, lng];
      const map = L.map('mapaCine').setView(coords, 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
      }).addTo(map);

      L.marker(coords).addTo(map)
        .bindPopup(`<b>${nombreCine}</b><br>Aquí está el cine.`)
        .openPopup();
    }, 100);
  }
}
