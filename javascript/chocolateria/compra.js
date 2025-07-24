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

document.addEventListener("DOMContentLoaded", function () {
    const vaciarBtn = document.getElementById("vaciarCarrito");

    vaciarBtn.addEventListener("click", () => {
        if (carrito.length === 0) {
            alert("El carrito ya está vacío.");
            return;
        }

        if (confirm("¿Estás seguro de que quieres vaciar el carrito?")) {
            carrito = [];
            listaProductos.innerHTML = "";
            precioTotalText.textContent = "Total: S/ 0.00";
            finalizarBtn.style.display = "none";
        }
    });

    const selectProducto = document.getElementById("productoSelect");
    const agregarBtn = document.getElementById("agregarProducto");
    const listaProductos = document.getElementById("listaProductos");
    const precioTotalText = document.getElementById("precioTotal");
    const calcularBtn = document.getElementById("calcularTotal");
    const finalizarBtn = document.getElementById("finalizarCompra");

    let carrito = [];

    agregarBtn.addEventListener("click", () => {
        const value = selectProducto.value;
        if (!value) return alert("Selecciona un producto válido.");

        const [nombre, precioStr] = value.split("|");
        const precio = parseFloat(precioStr);

        carrito.push({ nombre, precio });

        const item = document.createElement("li");
        item.textContent = `${nombre} - S/ ${precio.toFixed(2)}`;
        listaProductos.appendChild(item);

        selectProducto.selectedIndex = 0;
    });

    calcularBtn.addEventListener("click", () => {
        if (carrito.length === 0) return alert("No hay productos en el carrito.");

        const total = carrito.reduce((sum, prod) => sum + prod.precio, 0);
        precioTotalText.textContent = `Total: S/ ${total.toFixed(2)}`;
        finalizarBtn.style.display = "inline-block";
    });

    finalizarBtn.addEventListener("click", () => {
        alert("Función de pago aún en desarrollo. Aquí se registrará la tarjeta.");
        // Aquí luego puedes abrir otro modal o redirigir a otra sección/página.
    });
});
