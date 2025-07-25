document.addEventListener("DOMContentLoaded", function () {
  const btnAsientos = document.getElementById("btn-asientos");
  const asientosSection = document.getElementById("asientos-section");
  const resumenSection = document.getElementById("resumen-section");
  const mensajeFinal = document.getElementById("mensaje-final");
  const btnResumen = document.getElementById("btn-resumen");
  const btnConfirmar = document.getElementById("btn-confirmar");
  const resumenDetalle = document.getElementById("resumen-detalle");
  const cine = document.getElementById("cine");
  const horario = document.getElementById("horario");
  const asientosDiv = document.getElementById("asientos");

  let asientosSeleccionados = [];

  // Paso 1: Mostrar selección de asientos
  btnAsientos.onclick = function () {
    if (!cine.value || !horario.value) {
      alert("Selecciona cine y horario");
      return;
    }
    asientosSection.style.display = "block";
    resumenSection.style.display = "none";
    mensajeFinal.style.display = "none";
    generarAsientos();
  };

  // Paso 2: Selección de asientos
  function generarAsientos() {
    asientosDiv.innerHTML = "";
    asientosSeleccionados = [];
    for (let i = 1; i <= 20; i++) {
      const btn = document.createElement("div");
      btn.className = "asiento";
      btn.textContent = i;
      btn.onclick = function () {
        if (btn.classList.contains("selected")) {
          btn.classList.remove("selected");
          asientosSeleccionados = asientosSeleccionados.filter(a => a !== i);
        } else {
          btn.classList.add("selected");
          asientosSeleccionados.push(i);
        }
      };
      asientosDiv.appendChild(btn);
    }
  }

  // Paso 3: Mostrar resumen
  btnResumen.onclick = function () {
    if (asientosSeleccionados.length === 0) {
      alert("Selecciona al menos un asiento");
      return;
    }
    asientosSection.style.display = "none";
    resumenSection.style.display = "block";
    resumenDetalle.textContent =
      `Cine: ${cine.value}
Horario: ${horario.value}
Asientos: ${asientosSeleccionados.join(", ")}
Total: S/ ${(asientosSeleccionados.length * 15).toFixed(2)}`;
  };

  // Paso 4: Confirmar compra
  btnConfirmar.onclick = function () {
    resumenSection.style.display = "none";
    // Mostrar formulario de pago
    document.getElementById("pago-section").style.display = "block";
    mensajeFinal.style.display = "none";
    document.getElementById("comprobante-section").style.display = "none";
  };

  // Paso 5: Pago y comprobante
  document.getElementById("btn-pagar").onclick = function () {
    const nombre = document.getElementById("nombre-tarjeta").value.trim();
    const numero = document.getElementById("numero-tarjeta").value.trim();
    const fecha = document.getElementById("fecha-tarjeta").value.trim();
    const cvv = document.getElementById("cvv-tarjeta").value.trim();

    // Validación básica
    if (!nombre || !numero.match(/^\d{16}$/) || !fecha.match(/^\d{2}\/\d{2}$/) || !cvv.match(/^\d{3,4}$/)) {
      alert("Por favor, completa correctamente los datos de la tarjeta.");
      return;
    }

    // Oculta todo, muestra solo comprobante
    document.getElementById("pago-section").style.display = "none";
    mensajeFinal.style.display = "none";
    asientosSection.style.display = "none";
    resumenSection.style.display = "none";
    document.getElementById("form-compra").style.display = "none";
    const comprobanteSection = document.getElementById("comprobante-section");
    const comprobanteDetalle = document.getElementById("comprobante-detalle");
    comprobanteSection.style.display = "block";

    comprobanteDetalle.innerHTML = `
      <b>Cine:</b> ${cine.value}<br>
      <b>Horario:</b> ${horario.value}<br>
      <b>Asientos:</b> ${asientosSeleccionados.join(", ")}<br>
      <b>Total pagado:</b> S/ ${(asientosSeleccionados.length * 15).toFixed(2)}<br>
      <b>Nombre en tarjeta:</b> ${nombre}<br>
      <b>Tarjeta:</b> **** **** **** ${numero.slice(-4)}<br>
      <b>Fecha de pago:</b> ${fecha}
    `;
  };

  // Botón para volver a comprar
  document.getElementById("btn-volver-inicio").onclick = function () {
    // Limpiar selects y asientos
    cine.value = "";
    horario.value = "";
    asientosSeleccionados = [];
    asientosDiv.innerHTML = "";
    // Limpiar formularios
    document.getElementById("form-compra").reset();
    document.getElementById("form-pago").reset();
    // Ocultar todo menos el formulario principal
    document.getElementById("comprobante-section").style.display = "none";
    document.getElementById("form-compra").style.display = "block";
    asientosSection.style.display = "none";
    resumenSection.style.display = "none";
    mensajeFinal.style.display = "none";
    document.getElementById("pago-section").style.display = "none";
  };

});