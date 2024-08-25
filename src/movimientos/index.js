document.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Movimiento cargado con exito');

    const form = e.target;
    let data = {};
    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];
        if (element.type != 'submit') {
            data[element.name] = element.value;
        }
    }

    console.log(data);
})