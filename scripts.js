
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
const sliders = document.querySelectorAll('.image-slider');
sliders.forEach(slider => {
    let index = 0;
    const images = slider.querySelectorAll('img');
    setInterval(() => {
        images[index].style.display = 'none';
        index = (index + 1) % images.length;
        images[index].style.display = 'block';
    }, 3000); // Change image every 3 seconds
});

const heartIcons = document.querySelectorAll('.heart-icon');
heartIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('active');
    });
});
    document.addEventListener('DOMContentLoaded', function () {
        const slider = document.querySelector('.slides');
        const slides = document.querySelectorAll('.slides img');
        const overlay = document.querySelector('.overlay');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let counter = 0;

        // Next button functionality
        nextBtn.addEventListener('click', () => {
            counter++;
            if (counter >= slides.length) {
                counter = 0;
            }
            slider.style.transform = `translateX(${-100 * counter}%)`;
        });

        // Previous button functionality
        prevBtn.addEventListener('click', () => {
            counter--;
            if (counter < 0) {
                counter = slides.length - 1;
            }
            slider.style.transform = `translateX(${-100 * counter}%)`;
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        const text = "Welcome to our real estate company. We are dedicated to providing top-notch real estate services to help you find your dream home. With years of experience in the industry, our team of experts is committed to offering personalized solutions tailored to your needs.\n\nOur mission is to ensure a seamless and enjoyable property buying or selling experience. We pride ourselves on our extensive market knowledge, professional integrity, and exceptional customer service.\n\nWhether you are looking to buy, sell, or rent a property, we are here to guide you every step of the way. Join us on this journey to find your perfect home!";
        let index = 0;
        
        function typeText() {
            if (index < text.length) {
                document.getElementById("typed-text").textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 50); // Adjust the speed of typing here
            }
        }
    
        typeText();
    
        // Image slider functionality
        const slides = document.querySelectorAll('.slide');
        let currentIndex = 0;
    
        function showNextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    
        setInterval(showNextSlide, 3000); // Adjust the interval timing here
    });
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.getElementById('contact-form');
    
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for contacting us!');
            form.reset();
        });
    });
        