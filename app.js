
document.querySelectorAll('.submenu-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const sections = document.querySelectorAll('main > section');
        sections.forEach(sec => sec.classList.add('hidden'));
        const target = document.getElementById(btn.dataset.target);
        if (target) target.classList.remove('hidden');
    });
});
