 // Intersection Observer for Animations
 const animateElements = document.querySelectorAll('[data-animate]');

 const observer = new IntersectionObserver(
   (entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         const animation = entry.target.getAttribute('data-animate');
         entry.target.classList.add(`animate-${animation}`);
         observer.unobserve(entry.target); // Stop observing after animation
       }
     });
   },
   {
     threshold: 0.1, // Trigger when 10% of the element is visible
   }
 );

 animateElements.forEach((element) => {
   observer.observe(element);
 });



 const toggles = document.querySelectorAll(".faq-toggle");

 toggles.forEach((toggle) => {
   toggle.addEventListener("click", () => {
     toggle.parentNode.classList.toggle("active");
   });
 });



 testimonials = document.getElementsByClassName('testimonials__block');

 // Dynamically add class "active" to central testimonial on desktop
 var mq = window.matchMedia("(min-width: 48em)");
 if (mq.matches) {
   testimonials[1].classList.add('testimonials__block--active');
 } else {
   for (i = 0; i < testimonials.length; i++) {
     testimonials[i].classList.add('testimonials__block--active');
   };
 }

 var toogleBlock = function () {
   var active = document.getElementsByClassName('testimonials__block--active');
   active[0].classList.remove('testimonials__block--active');
   this.classList.add('testimonials__block--active');
 }

 // Bind event listeners
 for (var i = 0; i < testimonials.length; i++) {
   testimonials[i].addEventListener('click', toogleBlock, false);
 }