
// Primer script: cambio de color en header según data-header="black"
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.encabezado');
    const body = document.body;
    const alwaysBlack = body.getAttribute('data-header') === 'black';
  
    if (alwaysBlack) {
      header.style.backgroundColor = 'black';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    }
  });

//script de encabezado
window.addEventListener("scroll", function () {
    const header = document.querySelector(".encabezado");
    if (window.scrollY > 620) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

