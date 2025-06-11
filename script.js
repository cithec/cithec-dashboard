
function showSection(sectionId) {
  const sections = ['dashboard', 'form-citas', 'form-pacientes', 'form-medicos'];
  sections.forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
  document.getElementById(sectionId).classList.remove('hidden');
}
