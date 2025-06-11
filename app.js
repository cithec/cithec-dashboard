document.querySelectorAll(".nav-link").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.section).classList.remove("hidden");
  });
});

document.getElementById("formCita")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Formulario preparado para conectar con Google Sheets.");
});