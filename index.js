const slides = document.getElementById('slides');
  const totalSlides = slides.children.length;
  let index = 0;
  document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
  });

