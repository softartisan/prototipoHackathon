
document.querySelector('#cantidad').addEventListener('input', (e) => {
 
  document.querySelector('#total').textContent = `$${parseInt(e.target.value) * 690} CLP`;
  if (e.target.value==='') document.querySelector('#total').textContent = '';
});

document.querySelector('#compra').addEventListener('click', (e) => {
  e.preventDefault();
  window.alert('Compra efectuada');
})