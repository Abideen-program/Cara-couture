const body = document.querySelector('body');
const hambugger = document.getElementById('hambugger');

function openNav() {
    body.classList.add('openNav');
    hambugger.innerHTML = `
            sdahd
    `
}

hambugger.addEventListener('click', openNav)