document.addEventListener("DOMContentLoaded", function () {
    const botones = document.querySelectorAll(".lista-chocolateria_button");

    botones.forEach((boton) => {
        boton.addEventListener("click", function () {
            const li = boton.closest("li");
            const nombre = li.querySelector(".lista-chocolateria_producto").innerText;
            const precio = li.querySelector(".lista-chocolateria_precio").dataset.precio;
            const imagen = li.querySelector("img").getAttribute("src");

            const producto = {
                nombre: nombre,
                precio: precio,
                imagen: imagen
            };

            // Se guarda en localStorage
            localStorage.setItem("productoSeleccionado", JSON.stringify(producto));
            

            // Redirigimos a la otra página (por ejemplo: detalle.html)
            window.location.href = "detalle_prueba.html";
        });
    });
});