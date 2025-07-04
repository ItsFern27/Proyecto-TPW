document.addEventListener("DOMContentLoaded", function () {
    // PARTE PARA ABRIR Y CERRAR MODAL
    const btnAbrir = document.getElementById("chocolateria_compra");
    const modalCompra = document.getElementById("modal-compra");

    // abrir
    btnAbrir.addEventListener("click", () => {
        modalCompra.style.display = "flex";
    });

    // cerrar clickeando en cualquier parte fuera del modal
    modalCompra.addEventListener("click", (e) => {
        if (e.target === modalCompra) {
            modalCompra.style.display = "none";
        }
    });
});