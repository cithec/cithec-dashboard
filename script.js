
function showSection(sectionId) {
  const sections = ['dashboard', 'citas', 'pacientes', 'medicos', 'config'];
  sections.forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
  document.getElementById(sectionId).classList.remove('hidden');
}
