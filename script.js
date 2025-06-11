
function showForm(id) {
  document.querySelectorAll('main > div').forEach(div => div.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

// Envío del formulario de citas a Google Sheets
document.getElementById('citaForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch('https://script.google.com/macros/s/AKfycbxeGYIEyOBy5Eg4aHhOtA8uh__shG-KhiT706YLqiHUSv7K4sLLI8ijWNSGT1jgLBkakQ/exec', {
    method: 'POST',
    body: formData
  })
  .then(res => alert('Cita guardada con éxito'))
  .catch(err => alert('Error al guardar cita'));
});
