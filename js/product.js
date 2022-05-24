// CHANGING THE BACKGROUND IMAGES
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


// CHANGING THE SIZES
// select all the size button label
const sizeButton = document.querySelectorAll('#sizeButton label');
// set inital counter
let currentSize = 0;

// loop through the size buttons
sizeButton.forEach( (item, i) => {
    item.addEventListener('click', () => {
        // remove the active class from the first size button
        sizeButton[currentSize].classList.remove('check');
        // add check class to the size buttons when clicked
        item.classList.add('check');
        // set currentSize to the index of the clicked 
        currentSize = i;
    })
})