const menu = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  console.log('Menu do hamburguer clicado');
  menu.classList.toggle('nav-active');
});

//tela loading
// Seleciona o elemento de carregamento pelo ID
const loadingElement = document.getElementById('Loading');
const list = document.getElementById('list');

// Define uma função para ocultar o elemento de carregamento
function hideLoading() {
  loadingElement.style.display = 'none';
}

// Usa o setTimeout definir o tempo
setTimeout(hideLoading, 2000);


//Início CONFIGS MAPA


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
//FIM CONFIGS MAPA
  


//hamburger
const toggleSidebarButton = document.getElementById('toggle-nav');
const sidebar = document.querySelector('.sidebar');

function toggleSidebar() {
  if (sidebar.style.display === 'none') {
    sidebar.style.display = 'block';
  } else {
    sidebar.style.display = 'none';
  }
}



//Barra de pesquisa
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');

searchInput.addEventListener('input', event => {
  const searchTerm = event.target.value.trim().toLowerCase();
  if (searchTerm) {
    searchResults.style.display = 'block';
  } else {
    searchResults.style.display = 'none';
  }
});
