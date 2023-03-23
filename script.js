//tela loading
// Seleciona o elemento de carregamento pelo ID
const loadingElement = document.getElementById('loading');

// Define uma função para ocultar o elemento de carregamento
function hideLoading() {
  loadingElement.style.display = 'none';
}

// Usa o setTimeout para aguardar 5 segundos antes de ocultar o elemento de carregamento
setTimeout(hideLoading, 3000);



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



/* const input = document.querySelector('input');
const suggestions = document.querySelector('.suggestions');

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
});*/

//navegação
const toggleSidebarButton = document.getElementById('toggle-nav');
const sidebar = document.querySelector('.sidebar');

toggleSidebarButton.addEventListener('click', () => {
  sidebar.classList.toggle('visible');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.sidebar') && !event.target.closest('#toggle-nav')) {
    sidebar.classList.remove('visible');
  }
});




  // Calcular a distância para um marcador na posição [-23.5489, -46.6388]
  var lat2 = -23.5489;
  var lon2 = -46.6388;
  var R = 6371; // raio médio da Terra em km
  var dLat = (lat2 - lat1) * Math.PI / 180;
  var dLon = (lon2 - lon1) * Math.PI / 180;
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
          Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var distance = R * c;

  console.log("Distância para o marcador: " + distance + " km");
;
