function clearAppMemory() {
    localStorage.clear();
    sessionStorage.clear();

    if ('caches' in window) {
        caches.keys().then(names => {
            for (let name of names) caches.delete(name);
        });
    }

    document.getElementById('status').innerText = "✅ Memory Purged Successfully!";
}

document.addEventListener('contextmenu', event => event.preventDefault());

window.addEventListener('blur', () => {
    clearAppMemory();
});