//Botões
function scrollToElement(sectionClass) {
  const element = document.querySelector(sectionClass);

  // Define a posição do scroll da página web para o elemento
  window.scrollTo({
    top: element.offsetTop,
    left: 0,
  });
}