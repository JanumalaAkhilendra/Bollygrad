// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset();
});

// Intersection Observer for scroll-triggered animations
const sections = document.querySelectorAll('.section');
const courseItems = document.querySelectorAll('.course-item');
const aboutText = document.querySelector('.about-text');
const aboutImage = document.querySelector('.about-image');
const admissionHeaders = document.querySelectorAll('.admission-header');

admissionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.toggle-icon');

        content.classList.toggle('open');
        icon.textContent = content.classList.contains('open') ? '-' : '+';
    });
});

const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.2, // Trigger when 20% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add the 'visible' class
            observer.unobserve(entry.target); // Stop observing after animation
        }
    });
}, observerOptions);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});

// Observe course items with a delay for staggered animations
courseItems.forEach((item, index) => {
    setTimeout(() => {
        observer.observe(item);
    }, index * 200); // Delay each item's animation by 200ms
});

// Observe About section elements
observer.observe(aboutText);
observer.observe(aboutImage);

const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});


(function () {
	window.onload = () => {
		const obj = document.querySelector("#gallery");
		const time = 10000;
		function animStart() {
			if (obj.classList.contains("active") == false) {
				obj.classList.add("active");
				setTimeout(() => {
					animEnd();
				}, time);
			}
		}
		function animEnd() {
			obj.classList.remove("active");
			obj.offsetWidth;
		}
		document.addEventListener("scroll", function () {
			// scroll or scrollend
			animStart();
		});
		window.addEventListener("resize", animStart);
		animStart();
	};
})();

