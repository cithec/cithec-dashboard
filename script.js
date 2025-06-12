
function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.hidden = true);
  document.getElementById(id).hidden = false;
}
