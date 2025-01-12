// Menú hamburguesa
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('active');
});

// Desactivar clic derecho
document.addEventListener('contextmenu', event => event.preventDefault());

// Desactivar teclas específicas (F12, Ctrl+Shift+I, Ctrl+U, etc.)
document.addEventListener('keydown', function(e) {
    if (e.key === "F12" || (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.key === 'I' || e.key === 'i'))) {
        e.preventDefault();
    }
});


