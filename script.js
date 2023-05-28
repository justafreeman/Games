// // Função para abrir a janela do jogo
// function playGame(src) {
//   const iframe = document.createElement('iframe');
//   iframe.src = src;
//   iframe.width = '640';
//   iframe.height = '480';
//   iframe.style.maxWidth = '100%';

//   const closeButton = document.createElement('button');
//   closeButton.innerText = 'Fechar';
//   closeButton.className = 'close-button';
//   closeButton.addEventListener('click', function() {
//     document.body.removeChild(iframe);
//     document.body.removeChild(closeButton);
//   });

//   document.body.appendChild(iframe);
//   document.body.appendChild(closeButton);
// }

// document.addEventListener('DOMContentLoaded', function() {
//   const playButtons = document.querySelectorAll('.play-button');
//   const detailsButtons = document.querySelectorAll('.details-button');
//   const detailsSection = document.querySelector('.section-details');

//   // Abrir o jogo quando clicar em "Jogar"
//   playButtons.forEach(function(button) {
//     button.addEventListener('click', function() {
//       const gameSrc = button.getAttribute('data-src');
//       playGame(gameSrc);
//     });
//   });

//   // Abrir a seção de detalhes quando clicar em "Detalhes"
//   detailsButtons.forEach(function(button) {
//     button.addEventListener('click', function() {
//       detailsSection.style.opacity = '1';
//       detailsSection.style.pointerEvents = 'auto';
//     });
//   });

//   // Fechar a seção de detalhes quando clicar em "Fechar"
//   const closeButton = document.querySelector('.close-button');
//   closeButton.addEventListener('click', function() {
//     detailsSection.style.opacity = '0';
//     detailsSection.style.pointerEvents = 'none';
//   });

//   // Alternar entre o modo claro e escuro
//   const toggleDarkMode = document.getElementById('toggle-dark-mode');
//   toggleDarkMode.addEventListener('change', function() {
//     document.body.classList.toggle('dark-mode');
//   });
// });

// Função para criar o botão "Fechar"
function createCloseButton() {
  const closeButton = document.createElement('button');
  closeButton.innerText = 'Fechar';
  closeButton.className = 'close-button';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.style.backgroundColor = '#ff4500';
  closeButton.style.color = '#fff';
  closeButton.style.border = 'none';
  closeButton.style.padding = '10px 20px';
  closeButton.style.borderRadius = '5px';
  closeButton.style.cursor = 'pointer';

  return closeButton;
}

// Função para abrir a janela do jogo
function playGame(src) {
  const iframeContainer = document.createElement('div');
  iframeContainer.className = 'iframe-container';
  
  const iframeBackdrop = document.createElement('div');
  iframeBackdrop.className = 'iframe-backdrop';
  
  const iframeWrapper = document.createElement('div');
  iframeWrapper.className = 'iframe-wrapper';
  
  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.width = '800px';
  iframe.height = '600px';
  
  const closeButton = createCloseButton();
  closeButton.addEventListener('click', function() {
    document.body.removeChild(iframeContainer);
    document.body.style.overflow = 'auto'; // Restaura o scroll da página
  });

  iframeWrapper.appendChild(iframe);
  iframeWrapper.appendChild(closeButton);
  
  iframeContainer.appendChild(iframeBackdrop);
  iframeContainer.appendChild(iframeWrapper);

  document.body.appendChild(iframeContainer);
  document.body.style.overflow = 'hidden'; // Remove o scroll da página enquanto o iframe está aberto
}

document.addEventListener('DOMContentLoaded', function() {
  const playButtons = document.querySelectorAll('.play-button');
  const detailsButtons = document.querySelectorAll('.details-button');
  const detailsSection = document.querySelector('.section-details');

  // Abrir o jogo quando clicar em "Jogar"
  playButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const gameSrc = button.getAttribute('data-src');
      playGame(gameSrc);
    });
  });

  // Abrir a seção de detalhes quando clicar em "Detalhes"
  detailsButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const gameDetails = button.getAttribute('data-details');
      detailsSection.style.opacity = '1';
      detailsSection.style.pointerEvents = 'auto';
      document.querySelector('.details-content p').innerText = gameDetails;
      document.body.style.overflow = 'hidden'; // Remove o scroll da página enquanto a seção de detalhes está aberta
    });
  });

  // Fechar a seção de detalhes quando clicar em "Fechar"
  const closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click', function() {
    detailsSection.style.opacity = '0';
    detailsSection.style.pointerEvents = 'none';
    document.body.style.overflow = 'auto'; // Restaura o scroll da página
  });

  // Alternar entre o modo claro e escuro
  const toggleDarkMode = document.getElementById('toggle-dark-mode');
  toggleDarkMode.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
  });
});
