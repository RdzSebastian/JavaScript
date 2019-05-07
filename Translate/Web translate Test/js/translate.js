    var dataReload = document.querySelectorAll("[data-reload]");

    var lenguaje = {
      es: {
        welcome: "Bienvenidos a todos"
      },
      en: {
        welcome: "welcome everyone"
      },
      de: {
        welcome: "herzlich willkommen"
      },
      fr: {
        welcome: "Bienvenue tout le monde"
      }
    }

    if(window.location.hash){
      if(window.location.hash === "#en"){
        home.textContent = lenguaje.en.welcome;
      }
    }
    if(window.location.hash){
      if(window.location.hash === "#de"){
        home.textContent = lenguaje.de.welcome;
      }
    }
    if(window.location.hash){
      if(window.location.hash === "#fr"){
        home.textContent = lenguaje.fr.welcome;
      }
    }

    for(i=0; i<=dataReload.length; i++){
      dataReload[i].onclick = function(){
        location.reload(true);
      }
    }