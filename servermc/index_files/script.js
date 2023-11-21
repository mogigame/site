document.getElementById('copier').addEventListener('click', function() {
    copierMessage();
});

function copierMessage() {
    var message = "etherna.neocraft1293.fr";

    var textarea = document.createElement('textarea');
    textarea.value = message;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand('copy');

    document.body.removeChild(textarea);
    
    document.getElementById('copier').innerHTML = 'ip <span class="ip">copié </span>';
    console.log("ip copié")
}