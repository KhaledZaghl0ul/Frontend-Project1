// const navigation = document.querySelector('#navigation');
// const slides = document.querySelectorAll(".slide")
// const dots = document.querySelectorAll(".dot")
// if (navigation) {
//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 200) {
//             navigation.classList.add('sticky-lg-top');
//         } else {
//             navigation.classList.remove('sticky-lg-top');
//         }
//     });
// }
// let current = 0
// dots.forEach((dot, i) => {
//     dot.addEventListener("click", function () {
//         slides.forEach(s => s.classList.remove("active"))
//         dots.forEach(s => s.classList.remove("active"))
//         dot.classList.add("active")
//         slides[i].classList.add("active")
//         current = i
//         createSlideContent();
//     })
// })

// function createSlideContent() {
//     const slide_content = document.querySelector('#slide-content');
//     if (slide_content) {
//         dots[current].classList.add('active');
//         const slide_div = document.createElement('div');
//         slide_div.classList.add('slide-content', 'position-absolute', 'top-50', 'start-50', 'translate-middle', 'text-white', 'col-md-6', 'col-sm-6', 'col-lg-12', 'text-center');
//         slide_div.id = 'slide_content';
//         slide_div.innerHTML = `
//             <h1>What You Do Today For Peoples2</h1>
//             <p class="lead">Lorem ipsum dolor sit amet, consectetuer adipiscing elit uiooenean <br> commodo ligula. elit uiooenean commodo ligula.</p>
//             <a href="#" class="btn btn-primary active">get start now</a>
//             <a href="#" class="btn btn-primary">contact us</a>
//         `;
//         document.body.appendChild(slide_div);

//         slide_div.style.transition = 'transition all 0.5s';
        
//     }
// }

const dots = document.querySelectorAll('.dotd');
const carousel = document.getElementById('carouselExampleIndicators');

carousel.addEventListener('slide.bs.carousel', (event) => {
    dots.forEach((dot, index) => {
        if (index === event.to) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
});

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Trigger when scrolled 100px or more
        navbar.style.top = '0';
    } else {
        navbar.style.top = '45px'; // Hide navbar when scrolled back to top
    }
});



const counters = document.querySelectorAll('.count');

const animateCounters = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = Math.ceil(target / 150); // Control speed

        let count = 0;

        const updateCounter = () => {
            if (count < target) {
                count += increment;
                counter.innerText = count > target ? target : count;
                setTimeout(updateCounter, ); // Adjust for speed
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
};

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            sectionObserver.unobserve(entry.target); // Trigger animation only once
        }
    });
}, { threshold: 0.5 });

sectionObserver.observe(document.getElementById('counter-section'));

document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Show/Hide relevant tab
        const tabToShow = button.getAttribute('data-tab');
        document.querySelectorAll('.row.my-5').forEach(tab => {
            if (tab.id === tabToShow) {
                tab.style.display = 'flex';
            } else {
                tab.style.display = 'none';
            }
        });
    });
});

// Set initial state
document.querySelector('#tab_b').style.display = 'none';


