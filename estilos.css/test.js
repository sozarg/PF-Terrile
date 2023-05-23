// Obtener todas las imágenes en la página
const images = document.querySelectorAll('.image-container');

// Agregar el evento de clic a cada imagen
images.forEach(image => {
  const overlay = image.querySelector('.overlay');
  image.addEventListener('click', () => {
    if (overlay.style.opacity === '' || overlay.style.opacity === '0') {
      overlay.style.opacity = '1';
    } else {
      overlay.style.opacity = '0';
    }
  });
});