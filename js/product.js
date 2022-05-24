// select the images
const images = document.querySelectorAll('#productImage img',);
// select the image sliders
const imageSlider = document.getElementById('imageSlider');
// set initial counter
let currentImage = 0;

// loop through all images
images.forEach( (item, i) => {
    item.addEventListener('click', () => {
        // remove the active class in the first image(s)
        images[currentImage].classList.remove('active');
        // add active class to the images
        item.classList.add('active');
        // change the background-image of the image-slider
        imageSlider.style.backgroundImage = `url(${item.src})`
        // set currentImage to the index of the clicked image to remove active class;
        currentImage = i;
    })
})