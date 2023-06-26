	// Menú
    let desplegable = document.getElementById('menu');
    let lanzador = document.getElementById('enlace-menu');
    let lanz = document.querySelector('.lanzador-menu');
    let icon = lanz.querySelector("i");
    
    let despliegaClase = "menu-desplegado";
    let iconCerradoClass = "icon-menuCerrado";
    
    function despliegaMenu(e) {
      e.preventDefault();
      desplegable.classList.toggle(despliegaClase);
      icon.classList.toggle(iconCerradoClass);
      
      let links = desplegable.querySelectorAll("a");
      links.forEach(function(link) {
        link.addEventListener("click", function() {
          desplegable.classList.remove(despliegaClase);
          icon.classList.remove(iconCerradoClass);
        });
      });
    }
    
    lanz.addEventListener("click", despliegaMenu, false);
    
    
    // STAFF
    
    
    // let imgStaff = document.querySelectorAll('.staff-img');
    // let staffName = document.querySelectorAll('.staff-name');
    // let bloqueDetails = document.querySelectorAll('.details-wrapper');
    
    
    // imgStaff.forEach((img, index) => {
    //   img.addEventListener('click', () => {
        
    //     if (bloqueDetails[index].style.display === 'none') {
    //       bloqueDetails[index].style.display = 'flex';
    //     } else {
    //       bloqueDetails[index].style.display = 'none';
    //     }
    //   });
    // });
    
    // staffName.forEach((name, index) => {
    //   name.addEventListener('click', () => {
        
    //     if (bloqueDetails[index].style.display === 'none') {
    //       bloqueDetails[index].style.display = 'flex';
    //     } else {
    //       bloqueDetails[index].style.display = 'none';
    //     }
    //   });
    // });
    // 
    // 
    
    
        // console.log(imgStuff);
        // console.log(bloqueDetails);
    
    // NEWS EVENTS
    
    let news = document.querySelector('.news');
    let events = document.querySelector('.events');
    let newsSec = document.querySelector('.news-sec');
    let eventsSec = document.querySelector('.events-sec');
    
    news.addEventListener('click', function(){
        newsSec.style.display = 'block';
          eventsSec.style.display = 'none';
    })
    events.addEventListener('click', function(){
        eventsSec.style.display = 'block';
        newsSec.style.display = 'none';
    })

    // SMOOTH SCROLL
    
    window.onload = () => {
      let links = document.querySelectorAll('.link')
      
      let primero = links[0]
      primero.addEventListener('click', () => {
        scrollSuave('#Why', 500, 55)
      })
    
      let segundo = links[1]
      segundo.addEventListener('click', () => {
        scrollSuave('#About-Us', 500, 55)
      })
    
      let tercero = links[2]
      tercero.addEventListener('click', () => {
        scrollSuave('#Staff', 500, 53)
      })
    
      let cuarto = links[3]
      cuarto.addEventListener('click', () => {
        scrollSuave('#News', 500, 55)
      })
    
    }
    
    
    const scrollSuave = (objetivo, duracion, compensacion) => {
      let elemObj = document.querySelector(objetivo)
      let elemPos = elemObj.getBoundingClientRect().top - compensacion
      let posInicial = window.pageYOffset
      let tiempoInicial = null
    
      const animacion = tiempoAhora => {
        if (tiempoInicial === null) tiempoInicial = tiempoAhora
        tiempoPasado = tiempoAhora - tiempoInicial
        let auxAnimacion = easeInOutQuad(tiempoPasado, posInicial, elemPos, duracion)
        window.scrollTo(0, auxAnimacion)
        if (tiempoPasado < duracion) requestAnimationFrame(animacion)
      }
      requestAnimationFrame(animacion)
    }
    
    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2
      if (t < 1) return c / 2 * t * t + b
      t--
      return - c / 2 * (t * (t - 2) - 1) + b
    }
    
    // Slider de fotos 
    
    var sliderContainer = document.querySelector('.slider-container');
    var images = sliderContainer.querySelectorAll('img');
    
    var currentImageIndex = 0;
    var intervalId;
    
    function showImage(index) {
      images.forEach(function (image) {
        image.style.display = 'none';
      });
    
      images[index].style.display = 'block';
    }
    
    function startCarousel() {
      intervalId = setInterval(function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
      }, 2000);
    }
    
    function stopCarousel() {
      clearInterval(intervalId);
      intervalId = null; 
    }
    
    sliderContainer.addEventListener('mouseenter', function () {
      stopCarousel();
    });
    
    sliderContainer.addEventListener('mouseleave', function () {
      startCarousel();
    });
    
    function navigateLeft() {
      stopCarousel(); 
    
      if (currentImageIndex === 0) {
        currentImageIndex = images.length - 1;
      } else {
        currentImageIndex--;
      }
    
      showImage(currentImageIndex);
    }
    
    function navigateRight() {
      stopCarousel(); 
    
      if (currentImageIndex === images.length - 1) {
        currentImageIndex = 0;
      } else {
        currentImageIndex++;
      }
    
      showImage(currentImageIndex);
    }
    
    sliderContainer.addEventListener('click', function (event) {
      var rect = sliderContainer.getBoundingClientRect();
      var leftBoundary = rect.left + (rect.width / 3);
      var rightBoundary = rect.left + (2 * rect.width / 3);
      var clickX = event.clientX;
    
      if (clickX < leftBoundary) {
        navigateLeft();
      } else if (clickX > rightBoundary) {
        navigateRight();
      }
    });
    
    showImage(currentImageIndex);
    
    startCarousel();
    
    var sliderButton = document.querySelector('.slider-show');
    
    sliderButton.addEventListener('click', function () {
      if (sliderContainer.style.display === 'none') {
        sliderContainer.style.display = 'flex';
      } else {
        sliderContainer.style.display = 'none';
      }
    });
    
    // Flip
    
    function flipCard() {
      this.classList.toggle('flipped');
    }
    
    const staffCards = document.querySelectorAll('.staff-card');
    staffCards.forEach(function(card) {
      card.addEventListener('click', flipCard);
    });
    
    





