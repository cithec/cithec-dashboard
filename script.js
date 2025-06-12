function showView(id) {
  document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}