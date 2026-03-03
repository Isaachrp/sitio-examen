document.addEventListener('DOMContentLoaded', () => {
    // Array de objetos para Destinos
    const destinos = [
        {
            pais: "España",
            imagen: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            descripcion: "Descubre la pasión del flamenco, la arquitectura de Gaudí en Barcelona y la historia vibrante de Madrid y Sevilla."
        },
        {
            pais: "Francia",
            imagen: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            descripcion: "El romanticismo de París, los viñedos de Burdeos y el encanto de la Costa Azul te esperan en cada rincón."
        },
        {
            pais: "Italia",
            imagen: "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            descripcion: "Sumérgete en el Renacimiento en Florencia, navega por Venecia o asómbrate con el imponente Coliseo en Roma."
        },
        {
            pais: "Inglaterra",
            imagen: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            descripcion: "Desde el vibrante Londres hasta los misteriosos bloques de Stonehenge, un viaje a través de la realeza y elegancia."
        },
        {
            pais: "Holanda",
            imagen: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            descripcion: "Recorre los pintorescos canales de Ámsterdam, disfruta de los coloridos tulipanes y majestuosos molinos tradicionales."
        },
        {
            pais: "Alemania",
            imagen: "https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            descripcion: "Explora la modernidad de Berlín, los castillos dignos de cuentos de hadas en Baviera y su vasta e intrigante historia."
        }
    ];

    // Array de objetos para Testimonios
    const testimonios = [
        {
            nombre: "Alejandro Torres",
            foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            texto: "Mi viaje a Alemania con EuroVanguard fue una obra de precisión logística. Cada detalle estaba planeado a la perfección, liberándome de preocupaciones para disfrutar cada momento al máximo."
        },
        {
            nombre: "Laura Mendoza",
            foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            texto: "La inmersión cultural que experimenté en Italia superó mis expectativas. Guías eruditos que me llevaron más allá del recorrido turístico tradicional. Altamente recomendado para mentes inquietas."
        },
        {
            nombre: "Roberto Salazar",
            foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            texto: "Recorrer la ruta de Gaudí en España organizada por esta agencia es un deleite. La ingeniería de sus experiencias se nota en la fluidez de sus itinerarios diarios y selección de hoteles."
        }
    ];

    // Función para renderizar el Grid de Destinos
    function renderDestinations() {
        const gridContainer = document.getElementById('destinations-grid');
        let htmlContent = '';

        destinos.forEach(destino => {
            htmlContent += `
                <div class="col-md-6 col-lg-4">
                    <div class="card destination-card">
                        <div class="card-img-wrapper">
                            <img src="${destino.imagen}" class="card-img-top" alt="${destino.pais}">
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title mb-3">${destino.pais}</h5>
                            <p class="card-text">${destino.descripcion}</p>
                            <a href="#" class="card-link">Ver itinerario <i class="fa-solid fa-arrow-right ms-1"></i></a>
                        </div>
                    </div>
                </div>
            `;
        });

        gridContainer.innerHTML = htmlContent;
    }

    // Función para renderizar el Carrusel de Testimonios
    function renderTestimonials() {
        const carouselContainer = document.getElementById('testimonials-container');

        let htmlContent = '';
        let indicatorsHtml = '<div class="carousel-indicators">';

        testimonios.forEach((testimonio, index) => {
            const isActive = index === 0 ? 'active' : '';

            indicatorsHtml += `
                <button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="${index}" class="${isActive}" aria-current="${isActive === 'active' ? 'true' : 'false'}" aria-label="Slide ${index + 1}"></button>
            `;

            htmlContent += `
                <div class="carousel-item ${isActive}">
                    <div class="testimonial-card text-center text-white">
                        <img src="${testimonio.foto}" alt="${testimonio.nombre}" class="testimonial-img">
                        <p class="testimonial-text">"${testimonio.texto}"</p>
                        <h5 class="testimonial-author mb-4">${testimonio.nombre}</h5>
                    </div>
                </div>
            `;
        });

        indicatorsHtml += '</div>';

        const carousel = document.getElementById('testimonialsCarousel');
        carousel.insertAdjacentHTML('afterbegin', indicatorsHtml);

        carouselContainer.innerHTML = htmlContent;
    }

    // Initialize rendering
    renderDestinations();
    renderTestimonials();

    // Responsive nav link click handling (close menu on mobile)
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    });
});
