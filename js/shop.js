//select all the product in the shop section

const products = document.querySelectorAll('.product');

products.forEach( product => {
    product.addEventListener('click', () => {
        window.location.href='productDetails.html';
    })
})