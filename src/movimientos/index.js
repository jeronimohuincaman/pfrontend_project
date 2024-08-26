const movimientos = [
    { id: 1, descripcion: "Descripcion", categoria: 'Mercado', tipo: 1, monto: 100 },
    { id: 2, descripcion: "Descripcion", categoria: 'Personal', tipo: 2, monto: 200 },
    { id: 3, descripcion: "Descripcion", categoria: 'Transoporte', tipo: 3, monto: 300 },
    { id: 4, descripcion: "Descripcion", categoria: 'Otro', tipo: 4, monto: 400 },
]

document.addEventListener('DOMContentLoaded', (e) => {
    const container_movimientos = document.getElementById('movimientos');
    let tabla = document.createElement('table');
    let tblBody = document.createElement('tbody');

    movimientos.forEach(m => {
        let row = document.createElement('tr');
        let celda_descripcion = document.createElement('td');
        let celda_categoria = document.createElement('td');
        let celda_tipo = document.createElement('td');
        let celda_monto = document.createElement('td');

        texto_descripcion = document.createTextNode(m.descripcion);
        texto_categoria = document.createTextNode(m.categoria);
        texto_tipo = document.createTextNode(m.tipo);
        texto_monto = document.createTextNode(m.monto);

        celda_descripcion.appendChild(texto_descripcion);
        celda_categoria.appendChild(texto_categoria);
        celda_tipo.appendChild(texto_tipo);
        celda_monto.appendChild(texto_monto);

        row.appendChild(celda_descripcion);
        row.appendChild(celda_categoria);
        row.appendChild(celda_tipo);
        row.appendChild(celda_monto);

        tblBody.appendChild(row);
        
    });

    tabla.appendChild(tblBody);

    document.body.appendChild(tabla);
});