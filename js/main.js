const contenedorCasaCambio = document.querySelector('#casaCambio');

const casasDolar = [
  {nombre: 'Western Union', precioVenta: '680', precioCompra: '695', imagen: 'https://www.actualidadecommerce.com/wp-content/uploads/2017/03/Western-uni%C3%B3n-830x366.jpg'},
  {nombre: 'Turismo Frontera', precioVenta: '690', precioCompra: '695', imagen: 'http://www.guiaturismochile.cl/oc-content/uploads/1/180.jpg'},
  {nombre: 'Afex', precioVenta: '680', precioCompra: '695', imagen: 'http://www.parquearauco.cl/wp-content/themes/pak2017/ws/uploads/logo_360.jpg'}
]

const casasEuro = [
  {nombre: 'Turismo Frontera', precioVenta: '796', precioCompra: '798', imagen: 'http://www.guiaturismochile.cl/oc-content/uploads/1/180.jpg'},
  {nombre: 'Western Union', precioVenta: '790', precioCompra: '795', imagen: 'https://www.actualidadecommerce.com/wp-content/uploads/2017/03/Western-uni%C3%B3n-830x366.jpg'},
  {nombre: 'Afex', precioVenta: '788', precioCompra: '789', imagen: 'http://www.parquearauco.cl/wp-content/themes/pak2017/ws/uploads/logo_360.jpg'}
]

const casasYen = [
  {nombre: 'Afex', precioVenta: '6,53', precioCompra: '6,40', imagen: 'http://www.parquearauco.cl/wp-content/themes/pak2017/ws/uploads/logo_360.jpg'},
  {nombre: 'Western Union', precioVenta: '6,55', precioCompra: '6,49', imagen: 'https://www.actualidadecommerce.com/wp-content/uploads/2017/03/Western-uni%C3%B3n-830x366.jpg'},
  {nombre: 'Turismo Frontera', precioVenta: '6,54', precioCompra: '6,47', imagen: 'http://www.guiaturismochile.cl/oc-content/uploads/1/180.jpg'},
]

console.log(contenedorCasaCambio);

const limpiarContenedorCasaCambio = () => {
  contenedorCasaCambio.innerHTML = '';
}

const generarContenidoContenedor = (casas) => {
  casas.forEach((casa) => {

    const divJumbotron = document.createElement('div');
    divJumbotron.classList.add('jumbotron');
    divJumbotron.classList.add('m-2');
    divJumbotron.classList.add('p-2');

    const rowJumbotron = document.createElement('div');
    rowJumbotron.classList.add('row');

    const col1Jumbotron = document.createElement('div');
    col1Jumbotron.classList.add('col-6');

    const col2Jumbotron = document.createElement('div');
    col2Jumbotron.classList.add('col-md-6');

    const h3Jumbotron = document.createElement('h3');
    h3Jumbotron.textContent = casa.nombre;

    const pLead = document.createElement('p');
    pLead.classList.add('lead');
    pLead.textContent = `Compra: ${casa.precioCompra} - Venta: ${casa.precioVenta}`;

    const buttonCompra = document.createElement('button');
    buttonCompra.classList.add('btn');
    buttonCompra.classList.add('btn-primary');
    buttonCompra.classList.add('m-3');
    buttonCompra.textContent = 'Comprar';

    buttonCompra.addEventListener('click', () => {
      location.href='/transaccion.html';
    })

    const buttonVender = document.createElement('button');
    buttonVender.classList.add('btn');
    buttonVender.classList.add('btn-warning');
    buttonVender.classList.add('m-3');
    buttonVender.textContent = 'Vender';

    const img = document.createElement('img');
    img.src = casa.imagen;
    img.style = 'width: 250px;';

    col1Jumbotron.appendChild(h3Jumbotron);
    col1Jumbotron.appendChild(pLead);
    col1Jumbotron.appendChild(buttonCompra);
    col1Jumbotron.appendChild(buttonVender);

    col2Jumbotron.appendChild(img);

    rowJumbotron.appendChild(col1Jumbotron);
    rowJumbotron.appendChild(col2Jumbotron);

    divJumbotron.appendChild(rowJumbotron);

    contenedorCasaCambio.appendChild(divJumbotron);

  })
}


document.querySelector('#comprarDolar').addEventListener('click', () => {
  limpiarContenedorCasaCambio();
  generarContenidoContenedor(casasDolar);
  
})

document.querySelector('#comprarEuro').addEventListener('click',() => {
  limpiarContenedorCasaCambio();
  generarContenidoContenedor(casasEuro);
})


document.querySelector('#comprarYen').addEventListener('click',() => {
  limpiarContenedorCasaCambio();
  generarContenidoContenedor(casasYen);
})