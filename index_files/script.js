let ip = document.getElementById('ip');

ip.addEventListener('click', () => {
    navigator.clipboard.writeText('neocraft1293.fr');
    window.alert("Tu as bien copié l'IP du serveur ")
})