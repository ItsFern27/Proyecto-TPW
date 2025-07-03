document.addEventListener("DOMContentLoaded", function () {
    const btnAbrir = document.getElementById("chocolateria_compra");
    const modalCompra = document.getElementById("modal-compra");

    btnAbrir.addEventListener("click", () => {
        modalCompra.style.display = "flex"; // o "block" si usas diseño diferente
    });

    // Opcional: cerrar modal haciendo clic fuera del contenido
    modalCompra.addEventListener("click", (e) => {
        if (e.target === modalCompra) {
            modalCompra.style.display = "none";
        }
    });
});