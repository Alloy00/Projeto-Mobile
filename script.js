//tela loading
// Seleciona o elemento de carregamento pelo ID
const loadingElement = document.getElementById('loading');
const list = document.getElementById('list');

// Define uma função para ocultar o elemento de carregamento
function hideLoading() {
  loadingElement.style.display = 'none';
}

// Usa o setTimeout definir o tempo
setTimeout(hideLoading, 2000);



  if (navigator.geolocation) {
    // A API de geolocalização está disponível
    navigator.geolocation.getCurrentPosition(showPosition, showError, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  } else {
    // A API de geolocalização não está disponível
    console.log("Geolocalização não é suportada por este navegador.");
  }
  
  function showPosition(position) {
    // Obtem a posição do usuário
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var acc = position.coords.accuracy; // precisão da localização em metros
  
    console.log("Sua localização: " + lat + ", " + lng + " (precisão: " + acc + "m)");
  }
  
  function showError(error) {
    // Trata erros de geolocalização
    switch(error.code) {
      case error.PERMISSION_DENIED:
        console.log("Usuário negou a solicitação de geolocalização.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("As informações de localização não estão disponíveis.");
        break;
      case error.TIMEOUT:
        console.log("A solicitação de geolocalização expirou.");
        break;
      default:
        console.log("Ocorreu um erro desconhecido ao obter a localização.");
        break;
    }
  }

  

//sugestões
const input = document.getElementById('input');
const suggestions = document.querySelector('.suggestions');
const inputText = document.getElementById('input');
inputText.addEventListener('touchstart', function(e) {

  input.addEventListener('input', () => {
    const query = input.value.trim();
  
    if (query !== '') {
      suggestions.style.display = 'block';
    } else {
      suggestions.style.display = 'none';
    }
  });
  
  suggestions.addEventListener('click', (event) => {
    const selected = event.target.innerText;
    input.value = selected;
    suggestions.style.display = 'none';
  });

    
});


input.addEventListener('input', () => {
  const query = input.value.trim();

  if (query !== '') {
    suggestions.style.display = 'block';
  } else {
    suggestions.style.display = 'none';
  }
});

suggestions.addEventListener('click', (event) => {
  const selected = event.target.innerText;
  input.value = selected;
  suggestions.style.display = 'none';
});

//navegação
const toggleSidebarButton = document.getElementById('toggle-nav');
const sidebar = document.querySelector('.sidebar');

toggleSidebarButton.addEventListener('click', () => {
  sidebar.classList.toggle('visible');
});

function hideSidebarOnSmallScreen() {
  if (window.innerWidth < 768) {
    sidebar.classList.remove('visible');
  }
}

document.addEventListener('click', (event) => {
  if (!event.target.closest('.sidebar') && !event.target.closest('#toggle-nav')) {
    hideSidebarOnSmallScreen();
  }
});

window.addEventListener('resize', () => {
  hideSidebarOnSmallScreen();
});









